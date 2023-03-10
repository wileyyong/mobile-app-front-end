/**
 * A custom TypeScript port of OrbitControls with exposed touch methods for native overrides.
 *
 * @author EvanBacon / https://github.com/evanbacon
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 * @author ScieCode / http://github.com/sciecode
 * @author tierre0703 / http://github.com/tierre0703
 */
import {
  EventDispatcher,
  MOUSE,
  Quaternion,
  Spherical,
  TOUCH,
  Vector2,
  Vector3,
} from 'three';
import { Platform } from 'react-native';
import { getNode } from 'react-native-web-hooks';
// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move
const STATE = {
  DOLLY: 1,
  NONE: -1,
  PAN: 2,
  ROTATE: 0,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6,
  TOUCH_PAN: 4,
  TOUCH_ROTATE: 3,
};
const EPS = 0.000001;
const useDOM = false;

export class OrbitControls extends EventDispatcher {
  constructor(object, ref) {
    super();
    this.object = object;
    // Set to false to disable this control
    this.enabled = true;
    // "target" sets the location of focus, where the object orbits around
    this.target = new Vector3();
    // How far you can dolly in and out ( PerspectiveCamera only )
    this.minDistance = 2;
    this.maxDistance = 20;
    // How far you can zoom in and out ( OrthographicCamera only )
    this.minZoom = 0;
    this.maxZoom = Infinity;
    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    this.minPolarAngle = 0; // radians
    this.maxPolarAngle = Math.PI; // radians
    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
    this.minAzimuthAngle = -Infinity; // radians
    this.maxAzimuthAngle = Infinity; // radians
    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    this.enableDamping = false;
    this.dampingFactor = 0.05;
    // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
    // Set to false to disable zooming
    this.enableZoom = true;
    this.zoomSpeed = 1.0;
    // Set to false to disable rotating
    this.enableRotate = true;
    this.rotateSpeed = 1.0;
    // Set to false to disable panning
    this.enablePan = true;
    this.panSpeed = 1.0;
    this.screenSpacePanning = false; // if true, pan in screen-space
    this.keyPanSpeed = 7.0; // pixels moved per arrow key push
    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop
    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
    // Set to false to disable use of the keys
    this.enableKeys = true;
    // The four arrow keys
    this.keys = { BOTTOM: 40, LEFT: 37, RIGHT: 39, UP: 38 };
    // Mouse buttons
    this.mouseButtons = {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN,
    };

    // Touch fingers
    this.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN };
    // PRIVATE
    //
    // internals
    //
    this.changeEvent = { type: 'change' };
    this.startEvent = { type: 'start' };
    this.endEvent = { type: 'end' };
    this.state = STATE.NONE;
    // current position in spherical coordinates
    this.spherical = new Spherical();
    this.sphericalDelta = new Spherical();
    this.scale = 1;
    this.panOffset = new Vector3();
    this.zoomChanged = false;
    this.rotateStart = new Vector2();
    this.rotateEnd = new Vector2();
    this.rotateDelta = new Vector2();
    this.panStart = new Vector2();
    this.panEnd = new Vector2();
    this.panDelta = new Vector2();
    this.dollyStart = new Vector2();
    this.dollyEnd = new Vector2();
    this.dollyDelta = new Vector2();
    this.getPolarAngle = () => this.spherical.phi;
    this.getAzimuthalAngle = () => this.spherical.theta;

    this.momentumOn = false;
    this.momentumUp = 0;
    this.momentumLeft = 0;



    this.saveState = () => {
      this.target0.copy(this.target);
      this.position0.copy(this.object.position);
      this.zoom0 = this.object.zoom;
      this.sphericalDelta.set(0, 0, 0);
    };

    this.reset = () => {
      this.target.copy(this.target0);
      this.object.position.copy(this.position0);
      this.object.zoom = this.zoom0;
      this.object.updateProjectionMatrix();
      this.dispatchEvent(this.changeEvent);
      this.update();
      this.state = STATE.NONE;
    };

    this.dispose = () => {
      if (this.domElement) {
        this.domElement.removeEventListener(
          'contextmenu',
          this.onContextMenu,
          false,
        );

        this.domElement.removeEventListener(
          'mousedown',
          this.onMouseDown,
          false,
        );

        this.domElement.removeEventListener('wheel', this.onMouseWheel, false);

        if (useDOM) {
          this.domElement.removeEventListener(
            'touchstart',
            this.onTouchStart,
            false,
          );

          this.domElement.removeEventListener(
            'touchend',
            this.onTouchEnd,
            false,
          );

          this.domElement.removeEventListener(
            'touchmove',
            this.onTouchMove,
            false,
          );

          // Skip Node.js envs
          if (typeof window !== 'undefined') {
            window.document.removeEventListener(
              'mousemove',
              this.onMouseMove,
              false,
            );

            window.document.removeEventListener(
              'mouseup',
              this.onMouseUp,
              false,
            );

            window.removeEventListener('keydown', this.onKeyDown, false);
          }
        }
      }

      // this.dispatchEvent( { type: 'dispose' } ); // should this be added here?
    };

    // Private methods
    this.getAutoRotationAngle = () => {
      return ((2 * Math.PI) / 60 / 60) * this.autoRotateSpeed;
    };

    this.getZoomScale = () => {
      return 0.95 ** this.zoomSpeed;
    };

    this.rotateLeft = angle => {
      this.sphericalDelta.theta = -1 * angle;
    };

    this.rotateUp = angle => {
      this.sphericalDelta.phi = -1 * angle;
    };

    this.dollyIn = dollyScale => {
      if (this.object.isPerspectiveCamera) {
        // this.scale /= dollyScale;
        this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom * dollyScale),
        );

        this.object.updateProjectionMatrix();
        this.zoomChanged = true;
      } else if (this.object.isOrthographicCamera) {
        this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom * dollyScale),
        );

        this.object.updateProjectionMatrix();
        this.zoomChanged = true;
      } else {
        this.enableZoom = false;
      }
    };

    this.dollyOut = dollyScale => {
      if (this.object.isPerspectiveCamera) {
        // this.scale *= dollyScale;
        this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / dollyScale),
        );

        this.object.updateProjectionMatrix();
        this.zoomChanged = true;
      } else if (this.object.isOrthographicCamera) {
        this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / dollyScale),
        );

        this.object.updateProjectionMatrix();
        this.zoomChanged = true;
      } else {
        this.enableZoom = false;
      }
    };

    //
    // event callbacks - update the object state
    //
    this.width = 0;

    this.getElementWidth = () => {
      return this.width;
    };

    this.height = 0;

    this.getElementHeight = () => {
      return this.height;
    };

    this.handleMouseDownRotate = ({ clientX, clientY }) => {
      this.rotateStart.set(clientX, clientY);
    };

    this.handleMouseDownDolly = ({ clientX, clientY }) => {
      this.dollyStart.set(clientX, clientY);
    };

    this.handleMouseDownPan = ({ clientX, clientY }) => {
      this.panStart.set(clientX, clientY);
    };

    this.handleMouseMoveRotate = ({ clientX, clientY }) => {
      this.rotateEnd.set(clientX, clientY);
      this.rotateDelta
        .subVectors(this.rotateEnd, this.rotateStart)
        .multiplyScalar(this.rotateSpeed);

      this.rotateLeft(
        (2 * Math.PI * this.rotateDelta.x) / this.getElementHeight(),
      ); // yes, height

      this.rotateUp(
        (2 * Math.PI * this.rotateDelta.y) / this.getElementHeight(),
      );

      this.rotateStart.copy(this.rotateEnd);
      this.update();
    };

    this.handleMouseMoveDolly = ({ clientX, clientY }) => {
      this.dollyEnd.set(clientX, clientY);
      this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);

      if (this.dollyDelta.y > 0) {
        this.dollyIn(this.getZoomScale());
      } else if (this.dollyDelta.y < 0) {
        this.dollyOut(this.getZoomScale());
      }
      this.dollyStart.copy(this.dollyEnd);
      this.update();
    };

    this.handleMouseMovePan = ({ clientX, clientY }) => {
      this.panEnd.set(clientX, clientY);
      this.panDelta
        .subVectors(this.panEnd, this.panStart)
        .multiplyScalar(this.panSpeed);

      this.pan(this.panDelta.x, this.panDelta.y);
      this.panStart.copy(this.panEnd);
      this.update();
    };

    this.handleMouseWheel = ({ deltaY }) => {
      if (deltaY < 0) {
        this.dollyOut(this.getZoomScale());
      } else if (deltaY > 0) {
        this.dollyIn(this.getZoomScale());
      }
      this.update();
    };

    this.handleKeyDown = event => {
      let needsUpdate = false;

      switch (event.keyCode) {
        case this.keys.UP:
          this.pan(0, this.keyPanSpeed);
          needsUpdate = true;
          break;
        case this.keys.BOTTOM:
          this.pan(0, -this.keyPanSpeed);
          needsUpdate = true;
          break;
        case this.keys.LEFT:
          this.pan(this.keyPanSpeed, 0);
          needsUpdate = true;
          break;
        case this.keys.RIGHT:
          this.pan(-this.keyPanSpeed, 0);
          needsUpdate = true;
          break;
        default:
      }

      if (needsUpdate) {
        // prevent the browser from scrolling on cursor keys
        if (event && event.preventDefault) {
          event.preventDefault(event);
        }
        this.update();
      }
    };

    this.handleTouchStartRotate = ({ touches }) => {
      if (touches.length === 1) {
        this.rotateStart.set(touches[0].pageX, touches[0].pageY);
      } else {
        const x = 0.5 * (touches[0].pageX + touches[1].pageX);
        const y = 0.5 * (touches[0].pageY + touches[1].pageY);

        this.rotateStart.set(x, y);
      }
    };

    this.handleTouchStartPan = ({ touches }) => {
      if (touches.length === 1) {
        this.panStart.set(touches[0].pageX, touches[0].pageY);
      } else {
        const x = 0.5 * (touches[0].pageX + touches[1].pageX);
        const y = 0.5 * (touches[0].pageY + touches[1].pageY);

        this.panStart.set(x, y);
      }
    };

    this.handleTouchStartDolly = ({ touches }) => {
      const dx = touches[0].pageX - touches[1].pageX;
      const dy = touches[0].pageY - touches[1].pageY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      this.dollyStart.set(0, distance);
    };

    this.handleTouchStartDollyPan = event => {
      if (this.enableZoom) this.handleTouchStartDolly(event);
      if (this.enablePan) this.handleTouchStartPan(event);
    };

    this.handleTouchStartDollyRotate = event => {
      if (this.enableZoom) this.handleTouchStartDolly(event);
      if (this.enableRotate) this.handleTouchStartRotate(event);
    };

    this.handleTouchMoveRotate = ({ touches }) => {
      if (touches.length === 1) {
        this.rotateEnd.set(touches[0].pageX, touches[0].pageY);
      } else {
        const x = 0.5 * (touches[0].pageX + touches[1].pageX);
        const y = 0.5 * (touches[0].pageY + touches[1].pageY);

        this.rotateEnd.set(x, y);
      }
      this.rotateDelta
        .subVectors(this.rotateEnd, this.rotateStart)
        .multiplyScalar(this.rotateSpeed);

      this.rotateLeft(
        (2 * Math.PI * this.rotateDelta.x) /
          this.getElementHeight() /
          this.object.zoom,
      ); // yes, height

      this.rotateUp(
        (2 * Math.PI * this.rotateDelta.y) /
          this.getElementHeight() /
          this.object.zoom,
      );

      this.rotateStart.copy(this.rotateEnd);
    };

    this.handleTouchMovePan = ({ touches }) => {
      if (touches.length === 1) {
        this.panEnd.set(touches[0].pageX, touches[0].pageY);
      } else {
        const x = 0.5 * (touches[0].pageX + touches[1].pageX);
        const y = 0.5 * (touches[0].pageY + touches[1].pageY);

        this.panEnd.set(x, y);
      }
      this.panDelta
        .subVectors(this.panEnd, this.panStart)
        .multiplyScalar(this.panSpeed);

      this.pan(this.panDelta.x, this.panDelta.y);
      this.panStart.copy(this.panEnd);
    };

    this.handleTouchMoveDolly = ({ touches }) => {
      let vTouches = touches;

      if (!Array.isArray(vTouches)) vTouches = [];
      if (!vTouches[0]) vTouches[0] = { pageX: 0, pageY: 0 };
      if (!vTouches[1])
        vTouches[1] = {
          pageX: vTouches[0].pageX || 0,
          pageY: vTouches[0].pageY || 0,
        };
      const dx = vTouches[0].pageX - vTouches[1].pageX;
      const dy = vTouches[0].pageY - vTouches[1].pageY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      this.dollyEnd.set(0, distance);
      this.dollyDelta.set(
        0,
        this.dollyEnd.y / this.dollyStart.y ** this.zoomSpeed,
      );

      this.dollyIn(this.dollyDelta.y);
      this.dollyStart.copy(this.dollyEnd);
    };

    this.handleTouchMoveDollyPan = event => {
      if (this.enableZoom) this.handleTouchMoveDolly(event);
      // mark this part for only enabling zoom while pan
      // if (this.enablePan)
      //    this.handleTouchMovePan(event);
    };

    this.handleTouchMoveDollyRotate = event => {
      if (this.enableZoom) this.handleTouchMoveDolly(event);
      if (this.enableRotate) this.handleTouchMoveRotate(event);
    };

    //
    // event handlers - FSM: listen for events and reset state
    //
    this.onMouseDown = event => {
      if (this.enabled === false) return;

      // Prevent the browser from scrolling.
      if (event && event.preventDefault) {
        event.preventDefault(event);
      }
      // Manually set the focus since calling preventDefault above
      // prevents the browser from setting it automatically.

      if (this.domElement.focus) {
        this.domElement.focus();
      } else {
        window.focus();
      }

      switch (event.button) {
        case 0:
          switch (this.mouseButtons.LEFT) {
            case MOUSE.ROTATE:
              if (event.ctrlKey || event.metaKey || event.shiftKey) {
                if (this.enablePan === false) return;
                this.handleMouseDownPan(event);
                this.state = STATE.PAN;
              } else {
                if (this.enableRotate === false) return;
                this.handleMouseDownRotate(event);
                this.state = STATE.ROTATE;
              }
              break;
            case MOUSE.PAN:
              if (event.ctrlKey || event.metaKey || event.shiftKey) {
                if (this.enableRotate === false) return;
                this.handleMouseDownRotate(event);
                this.state = STATE.ROTATE;
              } else {
                if (this.enablePan === false) return;
                this.handleMouseDownPan(event);
                this.state = STATE.PAN;
              }
              break;
            default:
              this.state = STATE.NONE;
          }
          break;
        case 1:
          switch (this.mouseButtons.MIDDLE) {
            case MOUSE.DOLLY:
              if (this.enableZoom === false) return;
              this.handleMouseDownDolly(event);
              this.state = STATE.DOLLY;
              break;
            default:
              this.state = STATE.NONE;
          }
          break;
        case 2:
          switch (this.mouseButtons.RIGHT) {
            case MOUSE.ROTATE:
              if (this.enableRotate === false) return;
              this.handleMouseDownRotate(event);
              this.state = STATE.ROTATE;
              break;
            case MOUSE.PAN:
              if (this.enablePan === false) return;
              this.handleMouseDownPan(event);
              this.state = STATE.PAN;
              break;
            default:
              this.state = STATE.NONE;
          }
          break;
        default:
      }

      if (this.state !== STATE.NONE) {
        if (useDOM) {
          window.document.addEventListener(
            'mousemove',
            this.onMouseMove,
            false,
          );

          window.document.addEventListener('mouseup', this.onMouseUp, false);
        }
        this.dispatchEvent(this.startEvent);
      }
    };

    this.onMouseMove = event => {
      if (this.enabled === false) return;

      if (event && event.preventDefault) {
        event.preventDefault(event);
      }

      switch (this.state) {
        case STATE.ROTATE:
          if (this.enableRotate === false) return;
          this.handleMouseMoveRotate(event);
          break;
        case STATE.DOLLY:
          if (this.enableZoom === false) return;
          this.handleMouseMoveDolly(event);
          break;
        case STATE.PAN:
          if (this.enablePan === false) return;
          this.handleMouseMovePan(event);
          break;
        default:
      }
    };

    this.onMouseUp = () => {
      if (this.enabled === false) return;
      this.handleMouseUp(/* event */);

      if (useDOM) {
        window.document.removeEventListener(
          'mousemove',
          this.onMouseMove,
          false,
        );

        window.document.removeEventListener('mouseup', this.onMouseUp, false);
      }
      this.dispatchEvent(this.endEvent);
      this.state = STATE.NONE;
    };

    this.onMouseWheel = event => {
      if (
        this.enabled === false ||
        this.enableZoom === false ||
        (this.state !== STATE.NONE && this.state !== STATE.ROTATE)
      )
        return;

      if (event && event.preventDefault) {
        event.preventDefault(event);
      }

      if (event && event.stopPropagation) {
        event.stopPropagation(event);
      }

      this.dispatchEvent(this.startEvent);
      this.handleMouseWheel(event);
      this.dispatchEvent(this.endEvent);
    };

    this.onKeyDown = event => {
      if (
        this.enabled === false ||
        this.enableKeys === false ||
        this.enablePan === false
      )
        return;
      this.handleKeyDown(event);
    };

    this.onTouchStart = event => {
      if (this.enabled === false) return;

      if (event && event.preventDefault) {
        event.preventDefault(event);
      }

      switch (event.touches.length) {
        case 1:
          switch (this.touches.ONE) {
            case TOUCH.ROTATE:
              if (this.enableRotate === false) return;
              this.handleTouchStartRotate(event);
              this.state = STATE.TOUCH_ROTATE;
              break;
            case TOUCH.PAN:
              if (this.enablePan === false) return;
              this.handleTouchStartPan(event);
              this.state = STATE.TOUCH_PAN;
              break;
            default:
              this.state = STATE.NONE;
          }
          break;
        case 2:
          switch (this.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (this.enableZoom === false && this.enablePan === false) return;
              this.handleTouchStartDollyPan(event);
              this.state = STATE.TOUCH_DOLLY_PAN;
              break;
            case TOUCH.DOLLY_ROTATE:
              if (this.enableZoom === false && this.enableRotate === false)
                return;
              this.handleTouchStartDollyRotate(event);
              this.state = STATE.TOUCH_DOLLY_ROTATE;
              break;
            default:
              this.state = STATE.NONE;
          }
          break;
        default:
          this.state = STATE.NONE;
      }

      if (this.state !== STATE.NONE) {
        this.dispatchEvent(this.startEvent);
      }
    };

    this.onTouchMove = event => {
      if (this.enabled === false) return;

      if (event && event.preventDefault) {
        event.preventDefault(event);
      }

      if (event && event.stopPropagation) {
        event.stopPropagation(event);
      }

      if (event.touches.length >= 2) {
        if (this.state !== STATE.TOUCH_DOLLY_PAN) {
          this.state = STATE.TOUCH_DOLLY_PAN;
          if (this.enableZoom) this.handleTouchStartDolly(event);
        }
      } else if (
        event.touches.length < 2 &&
        this.state === STATE.TOUCH_DOLLY_PAN
      ) {
        // stop zoom handling when touch remains 1
        return;
      }

      switch (this.state) {
        case STATE.TOUCH_ROTATE:
          if (this.enableRotate === false) return;
          this.handleTouchMoveRotate(event);
          this.update();
          break;
        case STATE.TOUCH_PAN:
          if (this.enablePan === false) return;
          this.handleTouchMovePan(event);
          this.update();
          break;
        case STATE.TOUCH_DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this.handleTouchMoveDollyPan(event);
          this.update();
          break;
        case STATE.TOUCH_DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this.handleTouchMoveDollyRotate(event);
          this.update();
          break;
        default:
          this.state = STATE.NONE;
      }
    };

    this.onTouchEnd = () => {
      if (this.enabled === false) return;
      this.handleTouchEnd(/* event */);
      this.dispatchEvent(this.endEvent);
      this.state = STATE.NONE;
    };

    this.onContextMenu = event => {
      if (this.enabled === false) return;

      if (event && event.preventDefault) {
        event.preventDefault(event);
      }
    };

    if (ref && Platform.OS === 'web' && typeof window !== 'undefined') {
      this.domElement = getNode(ref) || window.document;
    }
    // for reset
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;

    if (this.domElement) {
      this.domElement.addEventListener(
        'contextmenu',
        this.onContextMenu,
        false,
      );

      this.domElement.addEventListener('mousedown', this.onMouseDown, false);
      this.domElement.addEventListener('wheel', this.onMouseWheel, false);

      if (useDOM) {
        this.domElement.addEventListener(
          'touchstart',
          this.onTouchStart,
          false,
        );

        this.domElement.addEventListener('touchend', this.onTouchEnd, false);
        this.domElement.addEventListener('touchmove', this.onTouchMove, false);
      }
      window.addEventListener('keydown', this.onKeyDown, false);
    }

    this.momentum = function () {
      if(!momentumOn) return;

        // console.log('momentum-ing: '+momentumUp+" "+momentumLeft);

        if(Math.abs(momentumUp + momentumLeft) < 10e-5){ momentumOn = false; return }

        momentumUp   *= this.momentumDampingFactor;
        momentumLeft *= this.momentumDampingFactor;

        thetaDelta -= this.momentumScalingFactor * momentumLeft;
        phiDelta   -= this.momentumScalingFactor * momentumUp;

    };


    // force an update at start
    this.update = (() => {
      const offset = new Vector3();
      // so camera.up is the orbit axis
      const quat = new Quaternion().setFromUnitVectors(
        this.object.up,
        new Vector3(0, 1, 0),
      );
      const quatInverse = quat.clone().inverse();
      const lastPosition = new Vector3();
      const lastQuaternion = new Quaternion();

      return () => {
        const position = this.object.position;

        offset.copy(position).sub(this.target);
        // rotate offset to "y-axis-is-up" space
        offset.applyQuaternion(quat);
        // angle from z-axis around y-axis
        this.spherical.setFromVector3(offset);

        if (this.autoRotate && this.state === STATE.NONE) {
          this.rotateLeft(this.getAutoRotationAngle());
        }

        if (this.enableDamping) {
          this.spherical.theta += this.sphericalDelta.theta;
          this.spherical.phi += this.sphericalDelta.phi;
        } else {
          this.spherical.theta += this.sphericalDelta.theta;
          this.spherical.phi += this.sphericalDelta.phi;
        }
        // restrict theta to be between desired limits
        this.spherical.theta = Math.max(
          this.minAzimuthAngle,
          Math.min(this.maxAzimuthAngle, this.spherical.theta),
        );

        // restrict phi to be between desired limits
        this.spherical.phi = Math.max(
          this.minPolarAngle,
          Math.min(this.maxPolarAngle, this.spherical.phi),
        );

        this.spherical.makeSafe();

        const tRadius = this.spherical.radius * this.scale;

        // should check distance in range
        if (tRadius < this.maxDistance && tRadius > this.minDistance)
          this.spherical.radius = tRadius;
        // restrict radius to be between desired limits
        // this.spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this.spherical.radius));

        // move target to panned location
        if (this.enableDamping === true) {
          this.target.add(this.panOffset);
        } else {
          this.target.add(this.panOffset);
        }
        offset.setFromSpherical(this.spherical);
        // rotate offset back to "camera-up-vector-is-up" space
        offset.applyQuaternion(quatInverse);
        position.copy(this.target).add(offset);
        this.object.lookAt(this.target);

        if (this.enableDamping === true && this.state !== STATE.TOUCH_DOLLY_PAN) {
          this.sphericalDelta.theta *= 1 - this.dampingFactor;
          this.sphericalDelta.phi *= 1 - this.dampingFactor;
          //this.panOffset.multiplyScalar(1 - this.dampingFactor);
        } else {
          this.sphericalDelta.set(0, 0, 0);
          this.panOffset.set(0, 0, 0);
        }
        this.scale = 1;

        // update condition is:
        // min(camera displacement, camera rotation in radians)^2 > this.EPS
        // using small-angle approximation cos(x/2) = 1 - x^2 / 8
        if (
          this.zoomChanged ||
          lastPosition.distanceToSquared(this.object.position) > EPS ||
          8 * (1 - lastQuaternion.dot(this.object.quaternion)) > EPS
        ) {
          this.dispatchEvent(this.changeEvent);
          lastPosition.copy(this.object.position);
          lastQuaternion.copy(this.object.quaternion);
          this.zoomChanged = false;

          return true;
        }

        return false;
      };
    })();

    this.panLeft = (() => {
      const v = new Vector3();

      return (distance, objectMatrix) => {
        v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
        v.multiplyScalar(-distance);
        this.panOffset.add(v);
      };
    })();

    this.panUp = (() => {
      const v = new Vector3();

      return (distance, objectMatrix) => {
        if (this.screenSpacePanning === true) {
          v.setFromMatrixColumn(objectMatrix, 1);
        } else {
          v.setFromMatrixColumn(objectMatrix, 0);
          v.crossVectors(this.object.up, v);
        }
        v.multiplyScalar(distance);
        this.panOffset.add(v);
      };
    })();

    // deltaX and deltaY are in pixels; right and down are positive
    this.pan = (() => {
      const offset = new Vector3();

      return (deltaX, deltaY) => {
        if (this.object.isPerspectiveCamera) {
          // perspective

          const position = this.object.position;

          offset.copy(position).sub(this.target);
          let targetDistance = offset.length();

          // half of the fov is center to top of screen
          targetDistance *= Math.tan(((this.object.fov / 2) * Math.PI) / 180.0);
          // we use only clientHeight here so aspect ratio does not distort speed
          this.panLeft(
            (2 * deltaX * targetDistance) / this.getElementHeight(),
            this.object.matrix,
          );

          this.panUp(
            (2 * deltaY * targetDistance) / this.getElementHeight(),
            this.object.matrix,
          );
        } else if (this.object.isOrthographicCamera) {
          // orthographic
          this.panLeft(
            (deltaX * (this.object.right - this.object.left)) /
              this.object.zoom /
              this.getElementWidth(),
            this.object.matrix,
          );

          this.panUp(
            (deltaY * (this.object.top - this.object.bottom)) /
              this.object.zoom /
              this.getElementHeight(),
            this.object.matrix,
          );
        } else {
          // camera neither orthographic nor perspective
          this.enablePan = false;
        }
      };
    })();

    this.update();
  }

  handleMouseUp = () => {
    // no-op
  };

  handleTouchEnd = () => {
    // no-op
  };
}
// # sourceMappingURL=OrbitControls.js.map

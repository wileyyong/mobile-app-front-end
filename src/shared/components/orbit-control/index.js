import * as React from 'react';
import { View, Platform, PanResponder, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { Camera } from 'three';

import { OrbitControls } from './controls';

function polyfillEventTouches(nativeEvent) {
  const polyEvent = nativeEvent;

  if (Platform.OS === 'web') return polyEvent;
  if (!Array.isArray(polyEvent.touches)) polyEvent.touches = [];

  if (Array.isArray(polyEvent.changedTouches)) {
    if (!polyEvent.touches.length) {
      polyEvent.touches = polyEvent.changedTouches;
    }
  }

  return polyEvent;
}

const OrbitControlsView = React.forwardRef(({ camera, ...props }, ref) => {
  const [size, setSize] = React.useState(null);
  const viewRef = React.useRef(null);
  const controls = React.useMemo(() => {
    if (camera && (viewRef === null ? null : viewRef.current)) {
      return new OrbitControls(camera, viewRef.current);
    }

    return null;
  }, [camera, viewRef === null || viewRef === null ? null : viewRef.current]);

  React.useImperativeHandle(
    ref,
    () => ({
      getControls() {
        return controls;
      },
    }),
    [controls]
  );

  const responder = React.useMemo(() => {
    function onTouchEnded(nativeEvent) {
      const polyfill = polyfillEventTouches(nativeEvent);
      // If only one touch then we may be encountering the bug where pan responder returns a two finger touch-end event in two different calls. :/
      // RNGH doesn't have this issue.
      const isMisfiredNativeGesture = Platform.OS !== 'web' && nativeEvent.identifier > 1;

      if (isMisfiredNativeGesture) {
        return;
      }

      if (controls !== null) {
        controls.onTouchEnd(polyfill);
      }
    }

    return PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant({ nativeEvent }) {
        if (controls !== null) {
          controls.onTouchStart(nativeEvent);
        }
      },
      onPanResponderMove({ nativeEvent }) {
        if (controls !== null) {
          controls.onTouchMove(nativeEvent);
        }
      },
      onPanResponderRelease({ nativeEvent }) {
        return onTouchEnded(nativeEvent);
      },
      onPanResponderTerminate({ nativeEvent }) {
        return onTouchEnded(nativeEvent);
      },
      onStartShouldSetPanResponder: () => {
        return true;
      },
      onStartShouldSetPanResponderCapture: () => {
        return true;
      },
    });
  }, [controls]);

  React.useEffect(() => {
    if (!controls || !size) {
      return;
    }
    controls.width = size.width;
    controls.height = size.height;
  }, [size, controls]);

  return (
    <View
      {...props}
      ref={viewRef}
      {...responder.panHandlers}
      onLayout={(event) => {
        if (props.onLayout) {
          props.onLayout(event);
        }
        setSize(event.nativeEvent.layout);
      }}
    />
  );
});

OrbitControlsView.defaultProps = {
  camera: null,
  children: null,
  onLayout: () => {},
  style: {},
};

OrbitControlsView.propTypes = {
  camera: Camera,
  children: PropTypes.node,
  onLayout: PropTypes.func,
  style: ViewPropTypes.style,
};

export default OrbitControlsView;
// # sourceMappingURL=OrbitControlsView.js.map

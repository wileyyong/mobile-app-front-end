import * as React from 'react';
import { View, Platform, PanResponder, ViewStyle } from 'react-native';
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

interface IOrbitControlsView {
  camera: typeof Camera | null;
  children: React.ReactNode;
  onLayout: () => void;
  style: ViewStyle;
}

const OrbitControlsView = React.forwardRef(
  ({ camera, ...props }: IOrbitControlsView, ref) => {
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
      [controls],
    );

    const responder = React.useMemo(() => {
      function onTouchEnded(nativeEvent) {
        const polyfill = polyfillEventTouches(nativeEvent);
        // If only one touch then we may be encountering the bug where pan responder returns a two finger touch-end event in two different calls. :/
        // RNGH doesn't have this issue.
        const isMisfiredNativeGesture =
          Platform.OS !== 'web' && nativeEvent.identifier > 1;

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
        onLayout={event => {
          if (props.onLayout) {
            props.onLayout(event);
          }
          setSize(event.nativeEvent.layout);
        }}
      />
    );
  },
);

export default OrbitControlsView;
// # sourceMappingURL=OrbitControlsView.js.map

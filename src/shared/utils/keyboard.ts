import React from 'react';
import { Keyboard } from 'react-native';

function useKeyboardHeight() {
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);

  function onKeyboardDidShow(e) {
    console.log('e.endCoordinates.height', e.endCoordinates.height);
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
  }

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return [keyboardHeight];
}

export default useKeyboardHeight;

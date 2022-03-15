import { Colors } from '$theme';

import React from 'react';
import { Switch as RNSwitch, Platform } from 'react-native';
import { PropTypes } from 'prop-types';
import ToggleSwitch from 'toggle-switch-react-native';

interface ISwitch {
  isOn: boolean;
  onToggle: () => void;
  disabled: boolean;
}
const Switch = ({ isOn, onToggle, disabled = false }: ISwitch) => {
  if (Platform.OS === 'ios') {
    return (
      <RNSwitch
        disabled={disabled}
        trackColor={{ false: null, true: Colors.LIGHT_PURPLE }}
        value={isOn}
        onValueChange={onToggle}
      />
    );
  }

  return (
    <ToggleSwitch
      disabled={disabled}
      isOn={isOn}
      size="large"
      onColor={Colors.LIGHT_PURPLE}
      onToggle={onToggle}
    />
  );
};

export default Switch;

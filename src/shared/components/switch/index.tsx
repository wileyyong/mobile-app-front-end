import { Colors } from '$theme';

import React from 'react';
import { Switch as RNSwitch, Platform } from 'react-native';
import { PropTypes } from 'prop-types';
import ToggleSwitch from 'toggle-switch-react-native';

interface ISwitch {
  isOn: boolean;
  onToggle: () => void;
  disabled: boolean;
  onColor: string;
  offColor: string;
  size: "small" | "medium" | "large" | undefined;
}

const Switch = ({ isOn, onToggle,onColor,offColor,size,  disabled = false }: ISwitch) => {
  //if (Platform.OS === 'ios') {
    return (
      <RNSwitch
        disabled={disabled}
        trackColor={{ false: offColor, true: onColor }}
        value={isOn}
        thumbColor={onColor}
        onValueChange={onToggle}
      />
    );
};

export default Switch;

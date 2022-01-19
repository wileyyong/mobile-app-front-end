import { Colors } from '$theme';

import React from 'react';
import { Switch as RNSwitch, Platform } from 'react-native';
import { PropTypes } from 'prop-types';
import ToggleSwitch from 'toggle-switch-react-native';

const Switch = ({ isOn, onToggle, disabled }) => {
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

Switch.defaultProps = {
  disabled: false,
};

Switch.propTypes = {
  disabled: PropTypes.bool,
  isOn: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Switch;

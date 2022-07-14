import React from 'react';
import { InfoIcon, SuccessIcon } from '../icons';
import { Colors } from '$theme';
import styles from './style';

export interface IconProps {
  icon: 'success' | 'info' | 'error';
}

const ToastIcon = ({ icon }: IconProps) => {
  switch (icon) {
    case 'success':
      return (
        <SuccessIcon
          color={Colors.DARK_PURPLE}
          size="small"
          style={styles.icon}
        />
      );
    case 'info':
      return (
        <InfoIcon color={Colors.DARK_PURPLE} size="small" style={styles.icon} />
      );
    default:
      return (
        <SuccessIcon
          color={Colors.DARK_PURPLE}
          size="small"
          style={styles.icon}
        />
      );
  }
};

export default ToastIcon;

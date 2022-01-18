import { Colors } from '$theme';
import { SettingsIcon } from '$components';

import React from 'react';

import BaseToast from './subcomponents/base-toast';
import styles from './style';

export default {
  error: (props) => (
    <BaseToast
      {...props}
      color={Colors.ORANGE}
      icon={<SettingsIcon color={Colors.DARK_PURPLE} size="small" style={styles.icon} />}
    />
  ),
  neutral: (props) => (
    <BaseToast
      {...props}
      color={Colors.WHITE}
      icon={<SettingsIcon color={Colors.DARK_PURPLE} size="small" style={styles.icon} />}
    />
  ),
  success: (props) => (
    <BaseToast
      {...props}
      color={Colors.GREEN}
      icon={<SettingsIcon color={Colors.DARK_PURPLE} size="small" style={styles.icon} />}
    />
  ),
  warning: (props) => (
    <BaseToast
      {...props}
      color={Colors.YELLOW}
      icon={<SettingsIcon color={Colors.DARK_PURPLE} size="small" style={styles.icon} />}
    />
  ),
};

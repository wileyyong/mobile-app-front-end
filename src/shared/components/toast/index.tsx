import React from 'react';
import RNToast from 'react-native-toast-message';

import toastConfig from './config';

const Toast = () => <RNToast config={toastConfig} />;

Toast.show = RNToast.show;
Toast.hide = RNToast.hide;

export default Toast;

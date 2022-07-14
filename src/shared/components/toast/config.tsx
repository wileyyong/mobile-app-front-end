import { Colors } from '$theme';

import React from 'react';

import BaseToast from './subcomponents/base-toast';

export default {
  error: (props: any) => (
    <BaseToast {...props} color={Colors.ORANGE} icon={'info'} />
  ),
  neutral: (props: any) => (
    <BaseToast {...props} color={Colors.WHITE} icon={'info'} />
  ),
  success: (props: any) => (
    <BaseToast {...props} color={Colors.GREEN} icon={'success'} />
  ),
  warning: (props: any) => (
    <BaseToast {...props} color={Colors.YELLOW} icon={'info'} />
  ),
};

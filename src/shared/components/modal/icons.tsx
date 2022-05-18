/* eslint-disable global-require */
import {
  CloseIcon,
  LocationIcon,
  PledgeIcon,
  SettingsIcon,
  TicketIcon,
} from '$components';
import { Colors } from '$theme';

import React from 'react';

export const getIcon = (name: string) => {
  switch (name) {
    case 'close':
      return <CloseIcon />;
    case 'location':
      return <LocationIcon />;
    case 'pledge':
      return <PledgeIcon size="large" color={Colors.DARK_PURPLE} />;
    case 'settings':
      return <SettingsIcon />;
    case 'ticket':
      return <TicketIcon />;
    default:
      return <></>;
  }
};

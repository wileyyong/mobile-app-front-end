/* eslint-disable global-require */
import { CloseIcon, LocationIcon, PledgeIcon, SettingsIcon, TicketIcon } from '$components';

import React from 'react';

export const getIcon = (name) => {
  switch (name) {
    case 'close':
      return <CloseIcon />;
    case 'location':
      return <LocationIcon />;
    case 'pledge':
      return <PledgeIcon />;
    case 'settings':
      return <SettingsIcon />;
    case 'ticket':
      return <TicketIcon />;
    default:
      return null;
  }
};

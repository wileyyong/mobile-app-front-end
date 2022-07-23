/* eslint-disable global-require */
import {
  CloseIcon,
  LocationIcon,
  PledgeIcon,
  SettingsIcon,
  TicketIcon,
  CloseXIcon,
  PledgeRainbowIcon,
} from '$components';
import { Colors, Scaling } from '$theme';

import React from 'react';

export const getIcon = (name: string) => {
  switch (name) {
    case 'closex':
      return <CloseXIcon size="medium" color={Colors.DARK_PURPLE} />;
    case 'close':
      return <CloseIcon />;
    case 'location':
      return <LocationIcon />;
    case 'pledge':
      return (
        <PledgeIcon
          style={{ marginTop: Scaling.scale(50) }}
          size="large"
          color={Colors.DARK_PURPLE}
        />
      );
    case 'pledge-rainbow':
      return (
        <PledgeRainbowIcon
          height={Scaling.scale(40)}
          width={Scaling.scale(42)}
        />
      );
    case 'settings':
      return <SettingsIcon />;
    case 'ticket':
      return <TicketIcon />;
    default:
      return <></>;
  }
};

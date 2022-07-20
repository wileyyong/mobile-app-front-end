import {
  PledgeIcon,
  PozActivityIcon,
  PozInIcon,
  PozOutIcon,
  PozProgressIcon,
} from '$components';
import React from 'react';
import { TRX_TYPES } from './index';

const PouchIcon = (props: { icon: TRX_TYPES }) => {
  const { icon } = props;

  switch (icon) {
    case TRX_TYPES.PROGRESS:
      return <PozProgressIcon />;
    case TRX_TYPES.ACTIVITY:
      return <PozActivityIcon />;
    case TRX_TYPES.RECEIVE:
      return <PozInIcon />;
    case TRX_TYPES.SENT:
      return <PozOutIcon />;
    case TRX_TYPES.COMPLETE:
      return <PledgeIcon color={'white'} />;
    default:
      return <PozActivityIcon />;
  }
};

export default PouchIcon;

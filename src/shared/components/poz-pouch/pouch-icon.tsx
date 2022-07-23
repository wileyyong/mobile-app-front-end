import {
  PledgeIcon,
  PozActivityIcon,
  PozInIcon,
  PozOutIcon,
  PozProgressIcon,
} from '$components';
import React from 'react';
import { ACTION_TYPES, TRX_TYPES } from './util';

interface ITrxIcon {
  type: ACTION_TYPES;
  processed: boolean;
}

const PouchIcon = (props: ITrxIcon) => {
  const { type, processed } = props;

  if (!processed) return <PozProgressIcon />;

  switch (type) {
    case ACTION_TYPES.PLEDGE:
      return <PledgeIcon color={'white'} />;
    case ACTION_TYPES.TRANSFER_FROM:
      return <PozInIcon />;
    case ACTION_TYPES.TRANSFER_TO:
      return <PozOutIcon />;
    case ACTION_TYPES.POZZLE_ADDED:
      return <PozActivityIcon />;
    default:
      return <PozActivityIcon />;
  }
};

export default PouchIcon;

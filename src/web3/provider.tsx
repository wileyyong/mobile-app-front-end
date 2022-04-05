import {
  NETWORK_PROP_LOCAL,
  NETWORK_PROP_MAINNET,
  NETWORK_URL_LOCAL,
  NETWORK_URL_MAINNET,
} from '$constants';

import React from 'react';
import Web3 from 'web3';

import { Web3Context } from './context';

type Web3ProviderProps = {
  children: React.ReactNode;
  network: typeof NETWORK_PROP_LOCAL | typeof NETWORK_PROP_MAINNET;
};

export default function Web3Provider({
  children,
  network = NETWORK_PROP_MAINNET,
}: Web3ProviderProps) {
  const web3 = new Web3(
    network === NETWORK_PROP_MAINNET ? NETWORK_URL_MAINNET : NETWORK_URL_LOCAL,
  );

  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
}

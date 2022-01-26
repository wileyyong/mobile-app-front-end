import { useContext } from 'react';
import type Web3 from 'web3';

import { Web3Context } from './context';

export const useWeb3 = () => useContext(Web3Context);

export async function ensToAddress(ensName: string, web3: Web3) {
  return web3.eth.ens.getAddress(ensName);
}

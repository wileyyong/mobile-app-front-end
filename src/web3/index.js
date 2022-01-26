import { useContext } from 'react';

import { Web3Context } from './context';

// Provider to wrap the app with context to the web3 object
export { default as Web3Provider } from './provider';

// Web3 utils
export * from './utils';

/**
 * Hook to get the web3 object from the context
 * @returns {import('web3').default} web3
 */
export const useWeb3 = () => useContext(Web3Context);

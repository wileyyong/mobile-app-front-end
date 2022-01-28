import React from 'react';
import type Web3 from 'web3';

export type Web3ContextValue = Web3 | null;
export const Web3Context = React.createContext<Web3ContextValue>(null);

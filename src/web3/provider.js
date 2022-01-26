import React from 'react';
import Web3 from 'web3';
import PropTypes from 'prop-types';

import { Web3Context } from './context';

const local = 'http://localhost:8545';
const mainnet = 'https://mainnet.infura.io/v3/d5cdd69563d94d83b0956f84c9d54f07';

export default function Web3Provider({ children, network }) {
  const web3 = new Web3(network === 'mainnet' ? mainnet : local);

  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
}

Web3Provider.defaultProps = {
  network: 'local',
};

Web3Provider.propTypes = {
  children: PropTypes.node.isRequired,
  network: PropTypes.oneOf(['local', 'mainnet']),
};

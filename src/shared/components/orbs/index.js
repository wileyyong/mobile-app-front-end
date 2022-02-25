/* eslint-disable global-require */
import React from 'react';
import { Image } from 'react-native';

const orbs = [
  {
    image: require('$assets/Orb.png'),
    style: { left: 0, position: 'absolute', top: 0 },
  },
  {
    image: require('$assets/Orb-1.png'),
    style: { position: 'absolute', right: 0, top: 0 },
  },
  {
    image: require('$assets/Orb-2.png'),
    style: { position: 'absolute', right: 0, top: 250 },
  },
  {
    image: require('$assets/Orb-3.png'),
    style: { bottom: 0, position: 'absolute', right: 0 },
  },
  {
    image: require('$assets/Orb-4.png'),
    style: { left: 0, position: 'absolute', top: 350 },
  },
];

/**
 * Absolutely positioned orbs for the background
 */
const Orbs = () => {
  return (
    <>
      {orbs.map(orb => (
        <Image key={orb.image} source={orb.image} style={orb.style} />
      ))}
    </>
  );
};

export default Orbs;

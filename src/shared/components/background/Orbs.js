import React from 'react';
import { Image } from 'react-native';

const orbs = [
  {
    image: require('$assets/Orb.png'),
    style: { top: 0, left: 0, position: 'absolute' },
  },
  {
    image: require('$assets/Orb-1.png'),
    style: { top: 0, right: 0, position: 'absolute' },
  },
  {
    image: require('$assets/Orb-2.png'),
    style: { top: 250, right: 0, position: 'absolute' },
  },
  {
    image: require('$assets/Orb-3.png'),
    style: { bottom: 0, right: 0, position: 'absolute' },
  },
  {
    image: require('$assets/Orb-4.png'),
    style: { top: 350, left: 0, position: 'absolute' },
  },
];

/**
 * Absolutely positioned orbs for the background
 */
const Orbs = () => {
  return (
    <>
      {orbs.map((orb, i) => (
        <Image key={i} source={orb.image} style={orb.style} />
      ))}
    </>
  );
};

export default Orbs;

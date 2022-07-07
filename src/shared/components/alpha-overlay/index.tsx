import React from 'react';
import {Text, VStack} from '$components';
import styles from './style';
import { Colors } from '$theme';

interface IAlphaOverlay {
  text:string;
}

const AlphaOverlay = ({ text }: IAlphaOverlay) => {

  return (
    <VStack style={styles.overlay} justify='center' align='center'>
      <Text color={Colors.GRAY3}>
        {text}
      </Text>
    </VStack>
  );
};

export default AlphaOverlay;

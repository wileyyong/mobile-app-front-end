import React from 'react';

import { View } from 'react-native';
import { t } from 'i18next';
import { Colors } from '$theme';
import { Text, VStack, Spacer } from '$components';
import styles from '../style';

const PledgeHeader = ({ title }) => {
  return (
    <VStack>
      <Text size="xs" style={styles.header} color={Colors.BLACK}>
        {t('pozzlePledgeSheet.header')}
      </Text>
      <Text size="xs" style={styles.subheader} color={Colors.BLACK}>
        {title}
      </Text>
      <Spacer height={10} />
      <View style={styles.explainerContainer}>
        <Text size="xs">{t('pozzlePledgeSheet.information')}</Text>
      </View>
    </VStack>
  );
};

export default PledgeHeader;

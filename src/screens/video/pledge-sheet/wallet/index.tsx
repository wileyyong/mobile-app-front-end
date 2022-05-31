import React from 'react';

import { t } from 'i18next';
import { Colors } from '$theme';
import { Text, HStack, WalletIcon, ArrowRight } from '$components';
import styles from '../style';

const PledgeWalletInformation = ({ userPozBalance }) => {
  return (
    <HStack
      align="flex-start"
      justify="space-between"
      style={styles.walletContainer}>
      <HStack>
        <WalletIcon color={Colors.DARK_PURPLE} />
        <Text
          size="xs"
          style={styles.walletBalanceText}
          color={Colors.DARK_PURPLE}>
          {t('pozzlePledgeSheet.walletBalance') +
            ' ' +
            userPozBalance +
            ' ' +
            t('pozzlePledgeSheet.poz')}
        </Text>
      </HStack>
      <HStack justify="flex-end">
        <ArrowRight color={Colors.DARK_PURPLE} />
      </HStack>
    </HStack>
  );
};

export default PledgeWalletInformation;

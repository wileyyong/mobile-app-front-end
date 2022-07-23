import React from 'react';

import { View } from 'react-native';
import { t } from 'i18next';
import { Colors } from '$theme';
import { Text, VStack, Spacer, GradientText } from '$components';
import styles from '../style';

const PledgeHeader = (props: { title: string }) => {
  return (
    <VStack>
      <Text
        size="xs"
        style={styles.header}
        color={Colors.SEVENTYPERCENTOFFWHITE}>
        {t('pozzlePledgeSheet.title')}
      </Text>
      <GradientText size="1md" weight="bold" style={styles.subheader}>
        {props.title}
      </GradientText>
      <Spacer height={20} />
      <View style={styles.explainerContainer}>
        <Text
          style={styles.explainerTxt}
          size="1xs"
          color={Colors.SEVENTYPERCENTOFFWHITE}>
          {t('pozzlePledgeSheet.information')}
        </Text>
      </View>
    </VStack>
  );
};

export default PledgeHeader;

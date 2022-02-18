import { Text } from '$components';

import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';

/**
 *
 *
 */
function PassportScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('landingScreen.passportScreen')}n</Text>
    </View>
  );
}

export default PassportScreen;

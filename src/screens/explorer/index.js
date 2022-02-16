import { Text } from '$components';

import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';

/**
 *
 *
 */
function ExplorerScreen() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('landingScreen.earthScreen')}</Text>
    </View>
  );
}

export default ExplorerScreen;

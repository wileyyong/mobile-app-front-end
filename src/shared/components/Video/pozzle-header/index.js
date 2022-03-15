import { Text } from '$components';

import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';

const downArrow = require('src/assets/images/downArrow.png');

const PozzleHeader = ({ onPress, pozzlesAdded, pozzlesPledged, title }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.topTextContainer}>
      <View style={{ flex: 1 }}>
        <Text size="xs" style={styles.headerText} weight="bold">
          {title}
        </Text>
        <View style={styles.bodyTextContainer}>
          <Text size="xxs" style={[styles.bodyText, styles.bodyTextMargin]}>
            {pozzlesAdded} {t('pozzleHeader.pozzlesAdded')}
          </Text>
          <Text size="xxs" style={styles.bodyText}>
            {pozzlesPledged} {t('pozzleHeader.pozzlesPledged')}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPress}>
        <Image source={downArrow} style={styles.downArrow} />
      </TouchableOpacity>
    </View>
  );
};

PozzleHeader.defaultProps = {
  onPress: () => {},
  pozzlesAdded: 0,
  pozzlesPledged: 0,
  title: '',
};

PozzleHeader.propTypes = {
  onPress: PropTypes.func,
  pozzlesAdded: PropTypes.number,
  pozzlesPledged: PropTypes.number,
  title: PropTypes.string,
};

export default PozzleHeader;

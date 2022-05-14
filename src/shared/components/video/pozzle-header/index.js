import { Text } from '$components';
import { Colors } from '$theme';

import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';

const downArrow = require('src/assets/images/downArrow.png');

const PozzleHeader = ({
  onPress,
  pozzlesAdded,
  pozzlesPledged,
  title,
  style,
}) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.topTextContainer, style]}>
      <View style={{ flex: 1 }}>
        <Text color={Colors.WHITE} style={styles.headerText}>
          {title}
        </Text>
        <View style={styles.bodyTextContainer}>
          <Text
            color={Colors.GRAY3}
            style={[styles.bodyText, styles.bodyTextMargin]}>
            {pozzlesAdded} {t('pozzleHeader.pozzlesAdded')}
          </Text>
          <Text color={Colors.GRAY3} style={styles.bodyText}>
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
  style: ViewStyle,
};

PozzleHeader.propTypes = {
  onPress: PropTypes.func,
  pozzlesAdded: PropTypes.number,
  pozzlesPledged: PropTypes.number,
  title: PropTypes.string,
  style: ViewStyle,
};

export default PozzleHeader;

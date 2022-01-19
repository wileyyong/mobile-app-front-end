import { Text } from '$components';

import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, View } from 'react-native';

import styles from './style';

const downArrow = require('$assets/downArrow.png');

/**
 * The scrollable video feed
 */
const PozzleHeader = ({ onPress, pozzlesAdded, pozzlesPledged, title }) => {
  return (
    <View style={styles.topTextContainer}>
      <View style={{ flex: 1 }}>
        <Text size="xs" style={styles.headerText} weight="bold">
          {title}
        </Text>
        <View style={styles.bodyTextContainer}>
          <Text size="xxs" style={[styles.bodyText, styles.bodyTextMargin]}>
            {pozzlesAdded} Pozzles Added
          </Text>
          <Text size="xxs" style={styles.bodyText}>
            {pozzlesPledged} $POZ Pledged
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

import { Text } from '$components';

import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';
import { pozzlePilot } from './utils';

const AboutPozzle = ({ addedBy, inspiredBy, locationJoined }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.aboutContainer}>
      <View style={styles.addedByContainer}>
        <Image source={pozzlePilot} style={styles.addedByImage} />
        <View>
          <Text size="xxs" style={styles.headerText} weight="regular">
            {addedBy}
          </Text>
          <Text size="xxs" style={styles.headerText} weight="regular">
            {t('aboutPozzle.inspiredBy')} {inspiredBy}
          </Text>
        </View>
      </View>
      <Text size="xxs" style={styles.headerText} weight="regular">
        {t('aboutPozzle.joinedIn')} {locationJoined}
      </Text>
    </View>
  );
};

AboutPozzle.defaultProps = {
  addedBy: '',
  inspiredBy: '',
  locationJoined: '',
};

AboutPozzle.propTypes = {
  addedBy: PropTypes.string,
  inspiredBy: PropTypes.string,
  locationJoined: PropTypes.string,
};

export default AboutPozzle;

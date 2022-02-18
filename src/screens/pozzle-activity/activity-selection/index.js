import { Button, Text, VStack, Spacer } from '$components';
import { Colors } from '$theme';
import { getLocation } from '$utils';

import React from 'react';
import { Modal } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './style';

const ActivitySelection = ({ show, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal visible={show} style={styles.modal} onClose={onClose}>
      <Text>Hello</Text>
    </Modal>
  );
};

ActivitySelection.defaultProps = {
  onClose: () => {},
  show: false,
};

ActivitySelection.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
};

export default ActivitySelection;

import { Button, Text, VStack, Modal, Spacer } from '$components';
import { Colors } from '$theme';
import { getLocation } from '$utils';

import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../style';

const LocationSheet = ({ show, onClose }) => {
  return (
    <Modal icon="location" show={show} title="Why do we ask for Location?" onClose={onClose}>
      <VStack style={styles.explainer}>
        <Text size="xs" style={styles.title}>
          Generalized Location means:
        </Text>
        <VStack align="flex-start">
          <Text size="xs" style={styles.li} weight="regular">
            ∙ your specific location never sent from your phone
          </Text>
          <Text size="xs" style={styles.li} weight="regular">
            ∙ your specific location is converted to a general location (e.g town or state) by your
            phone before being sent
          </Text>
          <Text size="xs" style={styles.li} weight="regular">
            ∙ other things
          </Text>
        </VStack>
      </VStack>
      <Spacer height={20} />
      <Button
        backgroundColor={Colors.PINK}
        style={styles.button}
        onPress={() => {
          getLocation();
          onClose();
        }}
      >
        <Text color={Colors.WHITE}>Use Generalised Location</Text>
      </Button>
    </Modal>
  );
};

LocationSheet.defaultProps = {
  onClose: () => {},
  show: false,
};

LocationSheet.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
};

export default LocationSheet;
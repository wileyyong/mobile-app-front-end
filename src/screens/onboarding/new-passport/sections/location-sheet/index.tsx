import { Button, Text, VStack, Modal, Spacer } from '$components';
import { Colors } from '$theme';
import { getLocation } from '$utils';

import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from '../../style';

const LocationSheet = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      icon="location"
      show={show}
      title="Why do we ask for Location?"
      onClose={onClose}>
      <VStack style={styles.explainer}>
        <Text size="xs" style={{}}>
          {t('onBoardingScreen.generalizedLocationText')}
        </Text>
        <VStack align="flex-start">
          <Text size="xs" style={styles.li} weight="regular">
            {t('onBoardingScreen.generalizedOption1')}
          </Text>
          <Text size="xs" style={styles.li} weight="regular">
            {t('onBoardingScreen.generalizedOption2')}
          </Text>
          <Text size="xs" style={styles.li} weight="regular">
            {t('onBoardingScreen.generalizedOption3')}
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
        }}>
        <Text color={Colors.WHITE}>
          {t('onBoardingScreen.useGeneralizedLocation')}
        </Text>
      </Button>
    </Modal>
  );
};

export default LocationSheet;

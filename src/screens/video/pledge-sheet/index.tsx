import {
  Button,
  Text,
  VStack,
  Modal,
  Spacer,
  HStack,
  WalletIcon,
  ArrowRight,
  WrappedImage,
} from '$components';
import { BorderRadius, Colors } from '$theme';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import styles from './style';
const pozIcon = require('src/assets/images/poz.png');

const PledgeSheet = ({
  show,
  onClose,
  title,
}: {
  show: boolean;
  onClose: () => void;
  title: string;
}) => {
  const [pozPledge, setPozPledge] = useState(0.1);
  const { t } = useTranslation();

  return (
    <Modal show={show} onClose={onClose} snapPoints={['75%']}>
      <VStack>
        <Text size="xs" style={{}}>
          {t('pozzlePledgeSheet.header')}
        </Text>
        <Text size="xs" style={{}}>
          {title}
        </Text>
        <Text size="xs" style={styles.explainer}>
          {t('pozzlePledgeSheet.information')}
        </Text>
      </VStack>
      <Spacer height={18} />
      <VStack>
        <HStack>
          <TouchableOpacity
            onPress={() => {
              setPozPledge(0.1);
            }}>
            <VStack
              style={[
                styles.pledgeBox,
                pozPledge === 0.1 ? styles.selectedPledge : '',
              ]}>
              <WrappedImage style={styles.pozIcon} source={pozIcon} />
              <Text size="xs" style={styles.pozText} color={Colors.DARK_PURPLE}>
                {'0.1 ' + t('pozzlePledgeSheet.poz')}
              </Text>
            </VStack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPozPledge(0.25);
            }}>
            <VStack
              style={[
                styles.pledgeBox,
                pozPledge === 0.25 ? styles.selectedPledge : '',
              ]}>
              <WrappedImage style={styles.pozIcon} source={pozIcon} />
              <Text size="xs" style={styles.pozText} color={Colors.DARK_PURPLE}>
                {'0.25 ' + t('pozzlePledgeSheet.poz')}
              </Text>
            </VStack>
          </TouchableOpacity>
        </HStack>
        <HStack justify="space-evenly" style={{ width: '100%' }}>
          <TouchableOpacity
            onPress={() => {
              setPozPledge(0.5);
            }}>
            <VStack
              style={[
                styles.pledgeBox,
                pozPledge === 0.5 ? styles.selectedPledge : '',
              ]}>
              <WrappedImage style={styles.pozIcon} source={pozIcon} />
              <Text size="xs" style={styles.pozText} color={Colors.DARK_PURPLE}>
                {'0.5 ' + t('pozzlePledgeSheet.poz')}
              </Text>
            </VStack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPozPledge(0);
            }}>
            <VStack
              style={[
                styles.pledgeBox,
                pozPledge === 0 ? styles.selectedPledge : '',
              ]}>
              <WrappedImage style={styles.pozIcon} source={pozIcon} />
              <Text size="xs" style={styles.pozText} color={Colors.DARK_PURPLE}>
                {t('pozzlePledgeSheet.custom')}
              </Text>
            </VStack>
          </TouchableOpacity>
        </HStack>
      </VStack>
      <Spacer height={18} />
      <HStack
        align="flex-start"
        justify="space-evenly"
        style={styles.walletContainer}>
        <WalletIcon color={Colors.DARK_PURPLE} />
        <Text size="xs" style={{}} color={Colors.DARK_PURPLE}>
          {t('pozzlePledgeSheet.walletBalance')}
        </Text>
        <ArrowRight color={Colors.DARK_PURPLE} />
      </HStack>
      <Spacer height={18} />
      <Button
        type={'outline'}
        backgroundColor={Colors.GRAY3}
        styleOutlineButton={{ borderRadius: BorderRadius.XL, padding: 2 }}>
        <Text size="xs" style={styles.pozText} color={Colors.DARK_PURPLE}>
          {t('pozzlePledgeSheet.poz') +
            ' ' +
            pozPledge +
            ' ' +
            t('pozzlePledgeSheet.poz')}
        </Text>
      </Button>
    </Modal>
  );
};

export default PledgeSheet;

/*<VStack style={styles.explainer}>
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
      </Button>*/

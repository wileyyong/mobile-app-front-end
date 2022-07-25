import { Activities, Users } from '$api';
import { Button, Text, Modal, Spacer, Toast } from '$components';
import { BorderRadius, Colors, Scaling } from '$theme';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useKeyboardHeight } from '$utils';
import styles from './style';
import PledgeHeader from './header';
import PledgeWalletInformation from './wallet';
import PledgeBoxes from './boxes';

const PledgeSheet = ({
  show,
  onClose,
  title,
  activityId,
}: {
  show: boolean;
  onClose: () => void;
  title: string;
  activityId: string;
}) => {
  const [height] = useKeyboardHeight();
  const [pozPledge, setPozPledge] = useState<any>(0.1);
  const [userPozBalance, setUserPozBalance] = useState(0);
  const [hasLoadUserBalance, setHasLoadUserBalance] = useState(false);
  const { t } = useTranslation();
  const redux = useSelector((state: any) => state.user);

  const submitPledge = async () => {
    if (pozPledge > userPozBalance) {
      Toast.show({
        autoHide: true,
        text1: t('pozzleActivityScreen.error'),
        text2: t('pozzlePledgeSheet.insufficientBalance'),
        type: 'error',
      });
      return;
    }
    
    await Activities.pledgeActivity(pozPledge, activityId).then(
      () => {
        Toast.show({
          autoHide: true,
          text1: t('pozzleActivityScreen.success'),
          text2: t('pozzlePledgeSheet.pledgeSuccesful'),
        });
      },
      err => {},
    );
  };

  const getUserBalance = async () => {
    const user = redux.user;
    await Users.getUser(user?._id).then((userData: any) => {
      if (userData.balance) setUserPozBalance(userData.balance);
      else setUserPozBalance(0);
      setHasLoadUserBalance(true);
    });
  };

  useEffect(() => {
    if (!hasLoadUserBalance) {
      getUserBalance();
    }
  }, []);

  return (
    <Modal
      usePledgeHeader={true}
      show={show}
      icon={'pledge-rainbow'}
      onClose={() => {
        Keyboard.dismiss();
        onClose();
      }}
      snapPoints={[Platform.OS === 'android' ? '80%' : '70%']}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.parentView}>
          <PledgeHeader title={title} />

          <Spacer height={20} />

          <PledgeBoxes setPozPledge={setPozPledge} pozPledge={pozPledge} />

          <Spacer height={20} />

          <PledgeWalletInformation userPozBalance={userPozBalance} />

          <Spacer height={18} />

          <Button
            isLoading={false}
            type={'outline'}
            backgroundColor={Colors.GRAY3}
            styleOutlineButton={{
              borderRadius: BorderRadius.LARGE,
              padding: 2,
            }}
            onPress={submitPledge}>
            <Text
              size="xs"
              style={styles.buttonText}
              color={Colors.DARK_PURPLE}>
              {t('pozzlePledgeSheet.pledge') +
                ' ' +
                pozPledge +
                ' ' +
                t('pozzlePledgeSheet.poz')}
            </Text>
          </Button>
        </View>
      </TouchableWithoutFeedback>

      <View
        style={{
          flex: 1,
          marginBottom: height,
          flexDirection: 'row',
          paddingBottom:
            Platform.OS === 'ios' ? Scaling.scale(15) : Scaling.scale(0),
        }}
      />
    </Modal>
  );
};

export default PledgeSheet;

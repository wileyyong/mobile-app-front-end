import {
  CustomBackdrop,
  FundIcon,
  GradientText,
  HStack,
  PozTokenIcon,
  RefreshIcon,
  SendIcon,
  Spacer,
  Text,
  VStack,
} from '$components';
import BottomSheet from '@gorhom/bottom-sheet';

import { CancelButton } from '$assets';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import PouchIcon from './pouch-icon';
import styles from './style';
import { ACTION_TYPES, getTransactions, TRX_TYPES } from './util';

interface ITransaction {
  action: ACTION_TYPES;
  amount: number;
  msg: string;
  processed: boolean;
  transactionType: TRX_TYPES;
}

interface IProps {
  onClose: () => void;
}

function PozPouch({ onClose }: IProps) {
  const { t } = useTranslation();

  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const { user } = useSelector((state: any) => state.user);
  const [showAvailableBalance, setShowAvailableBalance] = useState(true);

  useEffect(() => {
    getTransactions().then((response: any) => {
      setTransactions(response);
    });
  }, []);

  const renderItem = (props: { item: ITransaction }) => {
    const { item } = props;

    let pendingTrx = StyleSheet.flatten([
      !item.processed ? styles.opacity05 : {},
      styles.listItemContainer,
    ]);

    return (
      <TouchableOpacity>
        <HStack align="flex-start" style={pendingTrx}>
          <View style={styles.trxIconBg}>
            <PouchIcon type={item.action} processed={item.processed} />
          </View>
          <Spacer width={8} />

          <VStack style={styles.fill}>
            <Text size="sm" style={styles.trxTitle}>
              {item.msg}
            </Text>
            <Text size="xs" style={styles.trxDescription} weight={'regular'}>
              {item.action}
            </Text>
          </VStack>

          {item.transactionType === TRX_TYPES.DEBIT ? (
            <Text text={`-${item.amount}`} color={'white'} />
          ) : (
            <GradientText text={`+${item.amount}`} />
          )}
        </HStack>
      </TouchableOpacity>
    );
  };

  const snapPoints = useMemo(() => ['90%', '90%'], []);

  return (
    <BottomSheet
      enablePanDownToClose={true}
      backdropComponent={CustomBackdrop}
      onClose={()=>{
        onClose();
      }}
      handleComponent={() => null}
      snapPoints={snapPoints}>
      <VStack style={styles.container}>
        <SafeAreaView />
        <HStack style={styles.header} align="center">
          <Text size="1md" style={styles.title}>
            {t('PozPouch.title')}
          </Text>

          <TouchableOpacity  hitSlop={{ top: 40, bottom: 40, left: 40, right: 40 }} onPress={() => onClose()}>
            <CancelButton height={14} width={14} />
          </TouchableOpacity>
        </HStack>

        <HStack align="center" style={styles.Vbalance}>
          <PozTokenIcon height={42} width={42} />
          <Spacer width={8} />
          <GradientText
            text={
              showAvailableBalance
                ? user?.balance.toString()
                : user?.pendingBalance.toString()
            }
            size={'2xl'}
            weight={'bold'}
          />
        </HStack>

        <HStack align="center" justify="center">
          <GradientText
            text={
              showAvailableBalance
                ? t('PozPouch.availablePOZ')
                : t('PozPouch.pendingPOZ')
            }
            size={'sm'}
            weight={'regular'}
          />
          <Spacer width={6} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setShowAvailableBalance(!showAvailableBalance);
            }}>
            <RefreshIcon />
          </TouchableOpacity>
        </HStack>

        <HStack style={styles.actionBtnsView}>
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.7}>
            <SendIcon />
            <Text style={styles.actionBtnTxt} weight={'bold'} size="sm">
              {t('PozPouch.send')}
            </Text>
          </TouchableOpacity>
          <Spacer width={8} />
          <TouchableOpacity style={styles.actionBtn} activeOpacity={0.7}>
            <FundIcon />
            <Text style={styles.actionBtnTxt} weight={'bold'} size="sm">
              {t('PozPouch.fund')}
            </Text>
          </TouchableOpacity>
        </HStack>

        <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          data={transactions}
          contentContainerStyle={styles.listContainer}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.msg + index}
        />
      </VStack>
    </BottomSheet>
  );
}

export default PozPouch;

import {
  FundIcon,
  GradientText,
  HStack,
  PozProgressIcon,
  PozTokenIcon,
  RefreshIcon,
  SendIcon,
  Spacer,
  Text,
  VStack,
} from '$components';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { CancelButton } from '$assets';
import styles from './style';
import { Users } from '$api';
import PouchIcon from './pouch-icon';

export enum TRX_TYPES {
  PROGRESS = 'progress',
  ACTIVITY = 'activity',
  RECEIVE = 'receive',
  SENT = 'sent',
  COMPLETE = 'complete',
}

interface ITransaction {
  _id: string;
  type: TRX_TYPES;
  title: string;
  description: string;
}

const dummyTranaction: ITransaction[] = [
  {
    _id: '123',
    type: TRX_TYPES.PROGRESS,
    title: 'Activity Title',
    description: 'POZZLE ADDED - 5:13PM 2/3/2020',
  },
  {
    _id: '124',
    type: TRX_TYPES.ACTIVITY,
    title: 'Activity Title',
    description: 'PLEDGE - 5:13PM 2/3/2020',
  },
  {
    _id: '125',
    type: TRX_TYPES.RECEIVE,
    title: 'Transfer from 0x43…4263',
    description: 'TRANSFER TO POUCH - 5:13PM 2/3/2020',
  },
  {
    _id: '126',
    type: TRX_TYPES.SENT,
    title: 'Transfer to 0x43…4263',
    description: 'TRANSFER FROM POUCH - 5:13PM 2/3/2020',
  },
  {
    _id: '127',
    type: TRX_TYPES.COMPLETE,
    title: 'Activity Title',
    description: 'POZZLE ADDED - 5:13PM 2/3/2020',
  },
  {
    _id: '128',
    type: TRX_TYPES.ACTIVITY,
    title: 'Activity Title',
    description: 'PLEDGE - 5:13PM 2/3/2020',
  },
  {
    _id: '129',
    type: TRX_TYPES.RECEIVE,
    title: 'Transfer from 0x43…4263',
    description: 'TRANSFER TO POUCH - 5:13PM 2/3/2020',
  },
  {
    _id: '130',
    type: TRX_TYPES.SENT,
    title: 'Transfer from 0x43…4263',
    description: 'TRANSFER FROM POUCH - 5:13PM 2/3/2020',
  },
  {
    _id: '131',
    type: TRX_TYPES.ACTIVITY,
    title: 'Transfer from 0x43…4263',
    description: 'POZZLE ADDED - 5:13PM 2/3/2020',
  },
];

function PozPouchScreen() {
  const { t } = useTranslation();

  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    //TODO: REMOVE DUMMY DATA
    setTransactions(dummyTranaction);

    Users.getUserTransactions()
      .then(data => {
        console.log(data, ' : Transactions data');
        // setTransactions(data);
      })
      .catch(e => {
        console.log(e, 'getUserTransactions Error');
      });
  }, []);

  const renderItem = (props: { item: ITransaction }) => {
    const { item } = props;
    return (
      <TouchableOpacity key={item._id}>
        <HStack align="flex-start" style={styles.listItemContainer}>
          <View style={styles.trxIconBg}>
            <PouchIcon icon={item.type} />
          </View>
          <Spacer width={8} />

          <VStack style={styles.fill}>
            <Text size="sm" style={styles.trxTitle}>
              {item.title}
            </Text>
            <Text size="xs" style={styles.trxDescription} weight={'regular'}>
              {item.description}
            </Text>
          </VStack>

          <GradientText text={'+1'} />
        </HStack>
      </TouchableOpacity>
    );
  };

  return (
    <VStack style={styles.container}>
      <SafeAreaView />
      <HStack style={styles.header} align="center">
        <Text size="1md" style={styles.title}>
          {t('PozPouch.title')}
        </Text>

        <TouchableOpacity
          onPress={() => {
            // dispatch(toggleModal());
          }}>
          <CancelButton height={14} width={14} />
        </TouchableOpacity>
      </HStack>

      <HStack align="center" style={styles.Vbalance}>
        <PozTokenIcon height={42} width={42} />
        <Spacer width={8} />
        <GradientText text={'2.7'} size={'2xl'} weight={'bold'} />
      </HStack>

      <HStack align="center" justify="center">
        <GradientText
          text={t('PozPouch.availablePOZ')}
          size={'sm'}
          weight={'regular'}
        />
        <Spacer width={6} />
        <RefreshIcon />
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
        keyExtractor={item => item._id}
      />
    </VStack>
  );
}

export default PozPouchScreen;

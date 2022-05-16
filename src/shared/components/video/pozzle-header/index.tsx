import {
  HStack,
  Text,
  VStack,
  ArrowDown,
  PledgeIcon,
  PolygonIcon,
} from '$components';
import { Colors, Scaling } from '$theme';

import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './style';

type PozzleHeaderType = {
  title: string;
  pozzlesAdded?: number;
  pozzlesPledged?: number;
  style: ViewStyle;
  onPress?: () => void;
};

const PozzleHeader = ({
  onPress,
  pozzlesAdded,
  pozzlesPledged,
  title,
  style,
}: PozzleHeaderType) => {
  const { t } = useTranslation();

  return (
    <View style={styles.headerContainer}>
      <VStack
        justify="center"
        align="flex-start"
        style={{
          paddingTop: Scaling.scale(5),
          paddingHorizontal: Scaling.scale(20),
        }}>
        <Text
          size="sm"
          color={Colors.WHITE}
          numberOfLines={1}
          ellipsizeMode="tail"
          weight="semibold">
          {title}
        </Text>
        <HStack justify="center" align="center">
          <PolygonIcon
            height={14}
            width={14}
            color={Colors.GRAY3}
            style={styles.pozzlesIcon}
            size={'medium'}></PolygonIcon>
          <Text size="xs" color={Colors.FIFTYPERCENTWHITE}>
            {pozzlesAdded + ' ' + t('pozzleHeader.pozzles')}
          </Text>
          <PledgeIcon
            width={20}
            height={16}
            size="medium"
            style={styles.pledgeIcon}
            color={Colors.FIFTYPERCENTWHITE}></PledgeIcon>
          <Text
            size="xs"
            color={Colors.FIFTYPERCENTWHITE}
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.location}>
            {pozzlesPledged + ' ' + t('pozzleHeader.pozzlesPledged')}
          </Text>
        </HStack>
      </VStack>
      <TouchableOpacity style={styles.verbsArrowDown} onPress={onPress}>
        <ArrowDown
          size={'xlarge'}
          color={Colors.WHITE}
          width={26}
          height={16}
          style={styles.downArrowIcon}></ArrowDown>
      </TouchableOpacity>
    </View>
  );
};

export default PozzleHeader;

import React from 'react';
import {
  HStack,
  Text,
  VStack,
  ArrowDown,
  PledgeRainbowIcon,
  PolygonIcon,
} from '$components';
import { Colors, Scaling } from '$theme';

import { Image, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaskedView from '@react-native-masked-view/masked-view';

import styles from './style';

const RAINBOW = require('src/assets/images/rainbow.png');

type PozzleHeaderType = {
  title?: string;
  pozzlesAdded?: number;
  pozzlesPledged?: number;
  style?: ViewStyle;
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
        <HStack justify="center" align="center" style={{ height: 20 }}>
          <PolygonIcon
            height={18}
            width={14}
            color={Colors.FIFTYPERCENTWHITE}
            style={styles.pozzlesIcon}></PolygonIcon>
          <Text size="xs" color={Colors.FIFTYPERCENTWHITE} numberOfLines={1}>
            {pozzlesAdded + ' ' + t('pozzleHeader.pozzles')}
          </Text>
          <PledgeRainbowIcon
            width={24}
            height={18}
            size="medium"
            style={styles.pledgeIcon}></PledgeRainbowIcon>
          <MaskedView
            style={styles.maskedView}
            maskElement={
              <View style={styles.childrenMaskedView}>
                <Text
                  size="xs"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.location}>
                  {pozzlesPledged + ' ' + t('pozzleHeader.pozzlesPledged')}
                </Text>
              </View>
            }>
            <Image source={RAINBOW} />
          </MaskedView>
        </HStack>
      </VStack>
    </View>
  );
};

export default PozzleHeader;

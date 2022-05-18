import {
  HStack,
  Text,
  VStack,
  ArrowDown,
  PledgeIcon,
  PolygonIcon,
} from '$components';
import { Colors, Scaling } from '$theme';

import { Image, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaskedView from '@react-native-community/masked-view';

import styles from './style';

const RAINBOW = require('src/assets/images/rainbow.png');

type PozzleHeaderType = {
  title?: string;
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
        <MaskedView
          style={{ flex: 1, flexDirection: 'row', height: '100%' }}
          maskElement={
            <View
              style={{
                // Transparent background because mask is based off alpha channel.
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                size="sm"
                color={Colors.WHITE}
                numberOfLines={1}
                ellipsizeMode="tail"
                weight="semibold">
                {title}
              </Text>
            </View>
          }>
          <Image source={RAINBOW} />
        </MaskedView>
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
            color={
              'radial-gradient(95.11% 95.11% at 36.64% 4.89%, #2AD0CA 0%, #E1F664 22.92%, #FEB0FE 46.88%, #ABB3FC 68.23%, #5DF7A4 87.5%, #58C4F6 100%)'
            }
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

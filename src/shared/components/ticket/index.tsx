import { Colors } from '$theme';

import { Image, ImageBackground, View } from 'react-native';
import React from 'react';

import Text from '../text';

import styles from './style';

const ticketSubtractOne = require('$assets/ticketSubtractOne.png');

const union = require('$assets/union.png');

interface ITicket {
  ticketInfoELement?: React.ReactNode;
  ticketNumber?: string;
}

const Ticket = ({ ticketInfoELement, ticketNumber }: ITicket) => {
  return (
    <View style={{}}>
      <ImageBackground source={ticketSubtractOne} style={styles.lineatGradientBG}>
        <View style={styles.ticketContent}>
          <View style={styles.topCurveBorder} />
          <View>
            <View style={styles.ticketContentInfo}>
              <View>
                <Text
                  text="ERT"
                  weight="bold"
                  color={Colors.DARK_PURPLE}
                  lineHeight={26}
                  style={{ fontSize: 25 }}
                />
                <Text text="Planet Earth" weight="light" size="xxs" color={Colors.GRAY2} />
              </View>
              <View>
                <Text
                  text="Date"
                  weight="light"
                  size="xxs"
                  color={Colors.GRAY2}
                  textAlign="right"
                />
                <Text text="Jan 19, 2022" weight="light" size="xxs" color={Colors.DARK_PURPLE} />
              </View>
            </View>
            <Image source={union} style={{ marginLeft: 40, marginVertical: 5 }} />
            <View style={[styles.ticketContentInfo]}>
              <View>
                <Text
                  text="PZL"
                  weight="bold"
                  color={Colors.DARK_PURPLE}
                  lineHeight={26}
                  style={{ fontSize: 25 }}
                />
                <Text text="Planet #8329" weight="light" size="xxs" color={Colors.GRAY2} />
              </View>
              <View>
                <Text
                  text="Traveller"
                  weight="light"
                  size="xxs"
                  color={Colors.GRAY2}
                  textAlign="right"
                />
                <Text text="pozzleuser1" weight="light" size="xxs" color={Colors.DARK_PURPLE} />
              </View>
            </View>
          </View>
          <View style={styles.bottomCurveBorder} />
        </View>
        {/* <View> */}
        <Text
          color={Colors.DARK_PURPLE}
          size="lg"
          style={styles.ticketNumber}
          text={'#8329'}
          weight="bold"
        />
        {/* </View> */}
      </ImageBackground>
    </View>
  );
};

export default Ticket;

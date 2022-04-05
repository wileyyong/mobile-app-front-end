import { Colors } from '$theme';

import { Image, ImageBackground, View } from 'react-native';
import React from 'react';

import Text from '../text';

import styles from './style';

const ticketSubtractOne = require('src/assets/images/ticketSubtractOne.png');
const union = require('src/assets/images/union.png');

interface ITicket {
  ticketNumber?: string;
}

const Ticket = ({ ticketNumber }: ITicket) => {
  return (
    <View style={{}}>
      <ImageBackground
        source={ticketSubtractOne}
        style={styles.lineatGradientBG}>
        <View style={styles.ticketContent}>
          <View style={styles.topCurveBorder} />
          <View>
            <View style={styles.ticketContentInfo}>
              <View>
                <Text
                  color={Colors.DARK_PURPLE}
                  lineHeight={26}
                  style={{ fontSize: 25 }}
                  text="ERT"
                  weight="bold"
                />
                <Text
                  color={Colors.GRAY2}
                  size="xxs"
                  text="Planet Earth"
                  weight="light"
                />
              </View>
              <View>
                <Text
                  color={Colors.GRAY2}
                  size="xxs"
                  text="Date"
                  textAlign="right"
                  weight="light"
                />
                <Text
                  color={Colors.DARK_PURPLE}
                  size="xxs"
                  text="Jan 19, 2022"
                  weight="light"
                />
              </View>
            </View>
            <Image
              source={union}
              style={{ marginLeft: 40, marginVertical: 5 }}
            />
            <View style={[styles.ticketContentInfo]}>
              <View>
                <Text
                  color={Colors.DARK_PURPLE}
                  lineHeight={26}
                  style={{ fontSize: 25 }}
                  text="PZL"
                  weight="bold"
                />
                <Text
                  color={Colors.GRAY2}
                  size="xxs"
                  text="Planet #8329"
                  weight="light"
                />
              </View>
              <View>
                <Text
                  color={Colors.GRAY2}
                  size="xxs"
                  text="Traveller"
                  textAlign="right"
                  weight="light"
                />
                <Text
                  color={Colors.DARK_PURPLE}
                  size="xxs"
                  text="pozzleuser1"
                  weight="light"
                />
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
          text={ticketNumber || '#8329'}
          weight="bold"
        />
        {/* </View> */}
      </ImageBackground>
    </View>
  );
};

export default Ticket;

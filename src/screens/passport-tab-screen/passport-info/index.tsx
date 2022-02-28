import { CosmicBackground, Spacer, Ticket } from '$components';
import { Colors } from '$theme';

import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import DashedLine from 'react-native-dashed-line';

import styles from '../style';
import SettingsSheet from '../settings-sheet';

const EditImage = require('$assets/edit.png');
const SettingsImage = require('$assets/settings.png');
const RectangleImage = require('$assets/rectangleImage.png');
const CircleImage = require('$assets/circleImage.png');
const Triangle = require('$assets/triangle.png');
const Star = require('$assets/star.png');
const pozzlePilot = require('$assets/pozzlePilot.png');

const PassportInPut = ({ value }: { value: string }) => (
  <View style={{ marginTop: 2 }}>
    <TextInput
      style={{
        fontSize: 11,
        height: 20,
        lineHeight: 20,
        padding: 0,
        textAlignVertical: 'bottom',
      }}
      value={value}
    />
    <DashedLine dashColor="#CAA7D1" dashGap={5} dashLength={5} />
  </View>
);

const PassportInfo = () => {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <CosmicBackground>
      <ScrollView>
        <View style={styles.passportContainer}>
          <View style={styles.iconsView}>
            <Image source={EditImage} style={{ borderWidth: 2 }} />
            <TouchableOpacity onPress={() => setShowSheet(true)}>
              <Image source={SettingsImage} style={{ marginTop: 10 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.editView}>
            <View style={{ paddingHorizontal: 27, paddingVertical: 23 }}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={pozzlePilot}
                  style={[{ height: 100, width: 83 }, styles.profileImage]}
                />
                <View style={styles.profileInfo}>
                  <PassportInPut value="Australia" />
                  <PassportInPut value="Pozzler1 (they/them)" />
                  <PassportInPut value="0x4326794329374263" />
                  <PassportInPut value="23/02/2021" />
                </View>
              </View>
              <View>
                <View style={styles.textArea}>
                  <TextInput
                    multiline
                    numberOfLines={4}
                    style={{
                      color: Colors.BLACK,
                      fontSize: 11,
                      fontWeight: '700',
                      textAlignVertical: 'top',
                    }}
                    value="This is my Pozzle Planet Account!"
                  />
                </View>
              </View>
            </View>
            <View style={styles.editViewBottom}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image source={RectangleImage} />
                <Image source={CircleImage} />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <Image source={Triangle} />
                <Image source={Star} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.ticketView}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              height: 150,
              marginTop: 32,
            }}
          >
            {[1, 2, 3].map((item) => (
              <Ticket key={item} />
            ))}
          </ScrollView>
        </View>
        <Spacer height={100} />
      </ScrollView>
      <SettingsSheet show={showSheet} onClose={() => setShowSheet(false)} />
    </CosmicBackground>
  );
};

export default PassportInfo;

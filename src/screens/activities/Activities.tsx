import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  TextInput,
  Image,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg from 'react-native-svg';
import CosmicBackground from '../../shared/components/cosmic-background/index';
import { ScrollView } from 'react-native-gesture-handler';
import  ArrowDown  from '../../shared/components/icons/arrow-down';
import { scale } from 'src/shared/theme/scaling';

const Activities = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar hidden />
      <CosmicBackground>
        <ImageBackground
          source={require('../../assets/images/purpleGradient.png')}
          style={styles.purplebg}>
          <View style={styles.topbar}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="white"
              style={styles.input}
            />
            {/* <Image
              source={require('../../assets/icons/caret-down.png')}
              style={styles.caret}
            /> */}
            <ArrowDown style={styles.caret} size={27} color="white" />
          
          </View>
          <View style={styles.bottombar}>
            
          </View>
        </ImageBackground>
      </CosmicBackground>
    </SafeAreaView>
  );
};

export default Activities;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  purplebg: {
    flex: 1,
    paddingTop: 20,
  },
  input: {
    color: 'white',
    fontSize: 24,
    flex:1,

  },
  topbar: {
    marginTop: 25,
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottombar: {
    backgroundColor: '#362566',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  caret: {
    // width: 25,
    // height: 25,
    // transform:[{scaleX:1.2}]
  },
});

import { Text } from '$components';
import { Colors } from '$theme';

import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../subcomponents';

import { HeaderProps } from './type';
import Style from './style';

const Header = ({ title, subtitle }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={Style.container}>
      <View style={Style.buttonGroup}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={Style.content}>
        <Text color={Colors.WHITE} size="sm" text={title} />
        <Text color={Colors.GRAY2} size="xs" text={subtitle} />
      </View>
    </View>
  );
};

export default Header;

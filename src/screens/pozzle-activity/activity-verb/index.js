import { ArrowDown, ArrowUp, Text, HStack } from '$components';
import { Colors } from '$theme';
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Pressable, View } from 'react-native';

const ActivityVerb = ({ onPress, label, color }) => {
  return (
    <Pressable onPress={onPress}>
      <HStack justify="space-between">
        <ArrowUp color={color}></ArrowUp>
        <Text size="sm" color={color} weight="bold">
          {label}
        </Text>
      </HStack>
    </Pressable>
  );
};

ActivityVerb.defaultProps = {
  onPress: () => {},
  label: '',
  color: Colors.THIRTYPERCENTBLACK,
};

ActivityVerb.propTypes = {
  onSelect: PropTypes.func,
  label: PropTypes.string,
  color: PropTypes.string,
};

export default ActivityVerb;

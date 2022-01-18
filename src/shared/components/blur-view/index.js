import React from 'react';
import { Platform, StyleSheet, View, ViewPropTypes } from 'react-native';
import { PropTypes } from 'prop-types';
import { BlurView as RNBlurView } from '@react-native-community/blur';

const BlurView = ({ children, ...props }) => {
  if (Platform.OS === 'ios') {
    return <RNBlurView {...props}>{children}</RNBlurView>;
  }

  const styles = StyleSheet.flatten([
    props.style,
    {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
  ]);

  return (
    <View {...props} style={styles}>
      {children}
    </View>
  );
};

BlurView.defaultProps = {
  style: {},
};

BlurView.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

export default BlurView;

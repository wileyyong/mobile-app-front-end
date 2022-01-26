import { Colors } from '$theme';
import { Button, Text } from '$components';

import React, { useEffect, useRef } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';

import styles from './style';

const { width: screenWidth } = Dimensions.get('window');

const MainTabs = ({ state, descriptors, navigation }) => {
  const scrollRef = useRef();

  const [tabsWidth, setTabsWidth] = React.useState(0);

  const navigate = (route, index) => {
    const isFocused = state.index === index;

    const event = navigation.emit({
      target: route.key,
      type: 'tabPress',
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const handleScroll = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const position = (xOffset / tabsWidth) * 100;

    let index = null;

    if (position < 30) {
      index = 0;
    } else if (position > 30 && position < 60) {
      index = 1;
    } else if (position > 60) {
      index = 2;
    }

    navigate(state.routes[index], index);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ animated: true, x: screenWidth * state.index });
    }
  }, [state.index]);

  const getTab = (route, index) => {
    const { options } = descriptors[route.key];
    const label =
      // eslint-disable-next-line no-nested-ternary
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    if (route.name === 'PozzleActivity')
      return (
        <View
          key={label}
          style={[
            styles.tabContainer,
            { width: state.index === 1 ? screenWidth + 30 : screenWidth - 30 },
          ]}
        >
          <Button
            backgroundColor={Colors.PINK}
            style={styles.tab}
            onPress={() => navigate(route, index)}
          >
            <Text color={Colors.WHITE} style={styles.text}>
              {label}
            </Text>
          </Button>
        </View>
      );

    if (route.name === 'Explorer')
      return (
        <View key={label} style={[styles.tabContainer, { width: screenWidth - 60 }]}>
          <Button style={styles.tab} onPress={() => navigate(route, index)}>
            <Text style={styles.text}>{label}</Text>
          </Button>
        </View>
      );

    if (route.name === 'Passport')
      return (
        <View
          key={label}
          style={[
            styles.tabContainer,
            { width: state.index === 2 ? screenWidth - 30 : screenWidth },
          ]}
        >
          <Button style={styles.tab} onPress={() => navigate(route, index)}>
            <Text style={styles.text}>{label}</Text>
          </Button>
        </View>
      );

    return null;
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      onContentSizeChange={(contentWidth) => setTabsWidth(contentWidth)}
      onMomentumScrollEnd={handleScroll}
    >
      {state.routes.map((route, index) => getTab(route, index))}
    </ScrollView>
  );
};

export default MainTabs;

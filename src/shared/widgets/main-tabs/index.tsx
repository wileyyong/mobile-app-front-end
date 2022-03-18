import React, { useEffect, useRef } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';

import styles from './style';
import { Tab } from './subcomponents';

const MainTabs = ({ state, descriptors, navigation }: any) => {
  const { width: screenWidth } = useWindowDimensions();

  const scrollRef = useRef(null);

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

  const handleScroll = event => {
    try {
      console.log('tabsWidth ', tabsWidth);
      const xOffset = event.nativeEvent.contentOffset.x;
      console.log('xOffset ', xOffset);
      const position = (xOffset / tabsWidth) * 100;
      console.log('position ', position);
      const index = Math.floor(position / 40);
      console.log('index ', index);
      console.log('state.routes[index] ', state.routes[index]);
      navigate(state.routes[index], index);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        animated: true,
        x: screenWidth * state.index,
      });
    }
  }, [state.index, scrollRef.current]);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      style={[
        state.index === 0 ? styles.containerPozzleActivity : styles.container,
      ]}
      onContentSizeChange={contentWidth => setTabsWidth(contentWidth)}
      onMomentumScrollEnd={handleScroll}>
      {state.routes.map((route, index) => (
        <Tab
          descriptors={descriptors}
          index={index}
          key={route.key}
          navigate={navigate}
          route={route}
          state={state}
          styles={styles}
        />
      ))}
    </ScrollView>
  );
};

export default MainTabs;

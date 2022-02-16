import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';

import styles from './style';
import { Tab } from './subcomponents';

const MainTabs = ({ state, descriptors, navigation }) => {
  const { width: screenWidth } = useWindowDimensions();

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
    try {
      const xOffset = event.nativeEvent.contentOffset.x;
      const position = (xOffset / tabsWidth) * 100;
      const index = Math.floor(position / 30);

      navigate(state.routes[index], index);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ animated: true, x: screenWidth * state.index });
    }
  }, [state.index, scrollRef.current]);

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
      {state.routes.map((route, index) => (
        <Tab
          descriptors={descriptors}
          index={index}
          navigate={navigate}
          route={route}
          state={state}
          styles={styles}
        />
      ))}
    </ScrollView>
  );
};

MainTabs.propTypes = {
  descriptors: PropTypes.objectOf(PropTypes.object).isRequired,
  navigation: PropTypes.objectOf(PropTypes.object).isRequired,
  state: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MainTabs;

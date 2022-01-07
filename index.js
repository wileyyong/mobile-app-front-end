import { Navigation } from 'react-native-navigation';

import InitializeLayoutAnimation from './src/initializers/layout-animation';
import NavigationInitializer from './src/initializers/navigation';
import store from './src/redux';

import { LandingScreen } from '$screens';

Navigation.events().registerAppLaunchedListener(() => {
  InitializeLayoutAnimation(store).then(NavigationInitializer(store)).then(
    LandingScreen.navigate
  );
});

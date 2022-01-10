import 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';

import InitializeLayoutAnimation from './src/initializers/layout-animation';
import NavigationInitializer from './src/initializers/navigation';
import store from './src/redux';

import { OnboardingScreen } from '$screens';

Navigation.events().registerAppLaunchedListener(() => {
  // TODO: If user is logged in, navigate to home stack, otherwise navigate to onboarding stack
  InitializeLayoutAnimation(store).then(NavigationInitializer(store)).then(OnboardingScreen.navigate);
});

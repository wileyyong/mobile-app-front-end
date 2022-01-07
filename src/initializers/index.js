import InitializeLayoutAnimation from './layout-animation';
import NavigationInitializer from './navigation';

export function initializeNavigation(store) {
  return NavigationInitializer(store);
}

export function initializeLayoutAn() {
  return InitializeLayoutAnimation();
}

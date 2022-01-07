import { UIManager } from 'react-native';

export default function initialize() {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return Promise.resolve();
}

/* eslint no-use-before-define: 0 */
declare module '@coffeebeanslabs/react-native-inviewport';

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '@env' {
  export const MAPBOX_ACCESS_TOKEN: string;
}

interface INavigationProps {
  navigation?: {
    goBack: () => void;
    replace: (routeName: string, params: any) => void;
    push: (routeName: string, params?: any) => void;
    getParam: (paramName: string, defaultValue?: any) => any;
    navigate: (routeName: string, params?: any) => void;
    dispatch: (action: any) => void;
    state: {
      routeName: string;
      key: string;
      params: {
        [prop: string]: any;
      };
    };
    addListener: (eventType: string, cb: (e: any) => any) => void;
  };
  route?: {
    params: any;
  };
}

type TCordinates = [number, number];

interface PozzleUser {
  bio: string;
  location: string;
  pfp: string;
  pronouns: string;
  username: string;
}

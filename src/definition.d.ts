/* eslint no-use-before-define: 0 */
declare module '@coffeebeanslabs/react-native-inviewport';

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '@env' {
  export const MAPBOX_ACCESS_TOKEN: string;
  export const MAPBOX_API_URL: string;
  export const MAPBOX_API_VERSION: string;
  export const API_URL: string;
  export const API_TOKEN: string;
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

type RequestStatus = 'idle' | 'failed' | 'success' | 'pending';

type TCordinates = [number, number];

interface PozzleUser {
  authorizationHeader: string;
  balance: number;
  pendingBalance: number;
  bio: string;
  createdOn: Date;
  geohash: string;
  isDeleted: boolean;
  location: { type: string; coordinates: TCordinates, locationName:string };
  profilePhoto: string;
  profileUploadS3Url: {
    key: string;
    uploadURL: string;
  };
  pronounce: string;
  userName: string;
  walletAddress: string;
  _id: string;
  locationName:string;
}

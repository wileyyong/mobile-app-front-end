import messaging from '@react-native-firebase/messaging';

export const firebaseMessaging = {
  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      const tokenFCM = await messaging().getToken();
      console.log('FCM Token:', tokenFCM);
    }
    return enabled;
  },
  async checkUserPermission() {
    const authorizationStatus = await messaging().requestPermission();
    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      return true;
    } else if (authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL) {
      return true;
    } else {
      return false;
    }
  },
  async subscribeOnMessage() {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('New Notification arrived: ', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  },

  async onNotificationOpenedApp() {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification Data: ', remoteMessage);
      // Implement deeplinking logic
      // navigation.navigate(remoteMessage.data.type);
    });
  },
};

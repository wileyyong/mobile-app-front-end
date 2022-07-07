# Pozzle Planet React Native Mobile App

## Set node to correct version via nvm

```bash
nvm use
```

## Install yarn and project dependencies

```bash
npm install -g yarn
yarn
```

## Run server

```bash
yarn start
```

## Run artifact

### Android

```bash
yarn run android
```

### iOS

```bash
cd ios && pod install && cd ..
```


```bash
yarn run ios
```

### Release
- Before each new release change the app version on Package.json (to apply on the Settings screen)

### Android Release 
- Navigate to android directory `cd android`
- Run `./gradlew assembleRelease` to generate release APK
- You can find APK at `android/app/build/outputs/apk/release/app-release.apk`


### iOS Release

- Setup `.env` values as per the release environment
- Run `yarn run build:ios`
- Run `cd ios && pod install && cd ..`
- Open `ios/PozzlePlanet.xcworkspace` in Xcode
- On XCode Select PODS project, Go to Build Phases, On Targets list select CocoAsyncSocket Library, Remove the file GCDAsyncUdpSocket and GDCAsyncSocket from Compile Sources
- Run on device or archive to release into AppStores



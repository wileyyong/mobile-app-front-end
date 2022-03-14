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

### iOS Release

- Setup `.env` values as per the release environment
- Run `yarn run build:ios`
- Run `cd ios && pod install && cd ..`
- Open `ios/PozzlePlanet.xcworkspace` in Xcode and archive


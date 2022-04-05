import { BackButton, CosmicBackground, Earth, ExploreThumbnail, MapboxMarkers } from '$components';

import React from 'react';
import { useNavigation } from '@react-navigation/native';
// import { useTranslation } from 'react-i18next';

function EarthGlobeScreen() {
  const navigation = useNavigation();

  return (
    <CosmicBackground>
      <Earth />
      <BackButton backgroundColor="white" onPress={() => navigation.goBack()} />
    </CosmicBackground>
  );
}

export default EarthGlobeScreen;

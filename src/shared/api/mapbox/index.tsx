// eslint-disable-next-line import/no-unresolved
import { MAPBOX_ACCESS_TOKEN, MAPBOX_API_VERSION, MAPBOX_API_URL } from '@env';

import axios from 'axios';
import { t } from 'i18next';

const MapBox = {
  async translateGPStoLocation(lat: number, long: number) {
    let result = {};
    await axios
      .get(
        `${MAPBOX_API_URL}/geocoding/${MAPBOX_API_VERSION}/mapbox.places/${lat},${long}.json?types=place&access_token=${MAPBOX_ACCESS_TOKEN}`,
      )
      .then(_result => {
        result = _result;
      })
      .catch(() => {
        result = t('pozzleActivityScreen.notAvailable.activityHeader');
      });
    return result;
  },
};

export default MapBox;

// eslint-disable-next-line import/no-unresolved
import { MAPBOX_ACCESS_TOKEN, MAPBOX_API_VERSION, MAPBOX_API_URL } from '@env';
import axios from 'axios';

const MapBox = {
  async translateGPStoLocation(lat: number, lng: number): Promise<string> {
    const _result = await axios
      .get(
        `${MAPBOX_API_URL}/geocoding/${MAPBOX_API_VERSION}/mapbox.places/${lat},${lng}.json?types=country&access_token=${MAPBOX_ACCESS_TOKEN}`,
      )
    const result = _result.data?.features[0]?.place_name;
    return result;
  }
};

export default MapBox;

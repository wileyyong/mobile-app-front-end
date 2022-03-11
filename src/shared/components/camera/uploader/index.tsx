import { API_TOKEN, API_URL } from '$constants';

import axios from 'axios';
import { Platform } from 'react-native';

class UploadVideoFilesService {
  getBlob = async (fileUri: string) => {
    try {
      const resp = await fetch(fileUri, {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });
      const blob = await resp.blob();

      return blob;
    } catch (ex) {
      return fileUri;
    }
  };

  signUrl = async (file: string) => {
    const filename = file.split('/')[file.split('/').length - 1];

    return axios.post(
      `${API_URL}/v1/user/signedurl`,
      {
        contentType: Platform.OS === 'ios' ? 'video/quicktime' : 'video/mp4',
        fileName: filename,
      },
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        transformResponse: (res) => {
          return { key: JSON.parse(res).key, uploadURL: JSON.parse(res).uploadURL };
        },
      }
    );
  };

  async uploadVideo(file: string): Promise<boolean> {
    let result = false;

    await this.signUrl(file).then(
      async (response: any) => {
        result = await this.postVideo(response.data.uploadURL, response.data.key, file);
      },
      () => {
        result = false;
      }
    );

    return result;
  }

  async postVideo(uploadURL: string, key: string, file: string): Promise<boolean> {
    let result = false;
    const blob = await this.getBlob(file);

    await axios
      .put(uploadURL, blob, {
        headers: {
          'Content-Type': Platform.OS === 'ios' ? 'video/quicktime' : 'video/mp4',
        },
        transformRequest: (d) => d,
        transformResponse: (d) => d,
      })
      .then(
        () => {
          result = true;
        },
        () => {
          result = false;
        }
      );

    return result;
  }
}

export default new UploadVideoFilesService();

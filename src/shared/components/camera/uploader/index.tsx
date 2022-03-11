import axios from 'axios';
import { Platform } from 'react-native';
import { API_TOKEN, API_URL } from '$constants';

class UploadVideoFilesService {
  getBlob = async (fileUri: string) => {
    try {
      const resp = await fetch(fileUri, {
        method: 'GET',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      });
      const blob = await resp.blob();
      return blob;
    } catch (ex) {
      return fileUri;
    }
  };

  async signUrl(file: string) {
    const filename = file.split('/')[file.split('/').length - 1];
    return axios.post(
      `${API_URL}/v1/user/signedurl`,
      {
        fileName: filename,
        contentType: Platform.OS === 'ios' ? 'video/quicktime' : 'video/mp4',
      },
      {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_TOKEN}`,
        },
        transformResponse: (res) => {
          return { uploadURL: JSON.parse(res).uploadURL, key: JSON.parse(res).key };
        },
      }
    );
  }

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
        transformResponse: (d) => d,
        transformRequest: (d) => d,
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

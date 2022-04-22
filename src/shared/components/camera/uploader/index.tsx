// eslint-disable-next-line import/no-unresolved
import { API_TOKEN, API_URL } from '@env';

import axios from 'axios';
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';

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

  convertMovToMp4 = async (file: string) => {
    await RNFS.writeFile(file.replace('.mov', 'mp4'), file);

    return file.replace('.mov', 'mp4');
  };

  signUrl = async (file: string) => {
    const newFile =
      Platform.OS === 'ios' ? await this.convertMovToMp4(file) : file;
    const filename = newFile.split('/')[newFile.split('/').length - 1];
    return axios.post(
      `${API_URL}/users/signedurl`,
      {
        contentType: 'video/mp4',
        fileName: filename,
      },
      {
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        transformResponse: res => {
          return {
            key: JSON.parse(res).key,
            uploadURL: JSON.parse(res).uploadURL,
          };
        },
      },
    );
  };

  async uploadVideo(
    file: string,
    onProgressUpdate: (progressEvent: any) => void,
  ): Promise<any> {
    let result = false;

    await this.signUrl(file).then(
      async (response: any) => {
        result = await this.postVideo(
          response.data.uploadURL,
          response.data.key,
          file,
          onProgressUpdate,
        );
        if (result) result = response.data.uploadURL;
      },
      () => {
        result = false;
      },
    );

    return result;
  }

  async postVideo(
    uploadURL: string,
    key: string,
    file: string,
    onProgressUpdate: (progressEvent: any) => void,
  ): Promise<boolean> {
    let result = false;
    const blob = await this.getBlob(file);
    await axios
      .put(uploadURL, blob, {
        headers: {
          'Content-Type': 'video/mp4',
        },
        onUploadProgress: onProgressUpdate,
        transformRequest: d => d,
        transformResponse: d => d,
      })
      .then(
        () => {
          result = true;
        },
        () => {
          result = false;
        },
      );

    return result;
  }
}

export default new UploadVideoFilesService();

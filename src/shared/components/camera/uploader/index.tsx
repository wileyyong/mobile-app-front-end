import axios from 'axios';
import { Platform } from 'react-native';

class UploadFilesService {
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

  async uploadVideo(file: string, onUploadProgress?: any) {
    try {
      const name = file
        .split('/')
        [file.split('/').length - 1].replace('.mp4', '')
        .replace('.mov', '');
      const filename = file.split('/')[file.split('/').length - 1];

      axios
        .post(
          'https://testapi.pozzleplanet.com/v1/user/signedurl',
          {
            fileName: filename,
            contentType: Platform.OS === 'ios' ? 'video/quicktime' : 'video/mp4',
          },
          {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhd3NTaWduZWRDcmVkcyI6eyJ1cmwiOiJodHRwczovL3MzLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb20vcHAtOW8wZWVkYm5oMjE1IiwiZmllbGRzIjp7ImJ1Y2tldCI6InBwLTlvMGVlZGJuaDIxNSIsIlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYiLCJYLUFtei1DcmVkZW50aWFsIjoiQUtJQVpNQ05IRjM2Q0hZUjM0NFgvMjAyMjAzMDkvYXAtc291dGhlYXN0LTIvczMvYXdzNF9yZXF1ZXN0IiwiWC1BbXotRGF0ZSI6IjIwMjIwMzA5VDA3MjcwNFoiLCJQb2xpY3kiOiJleUpsZUhCcGNtRjBhVzl1SWpvaU1qQXlNaTB3TXkweE1WUXdOem95Tnpvd05Gb2lMQ0pqYjI1a2FYUnBiMjV6SWpwYmV5SmhZMndpT2lKd2RXSnNhV010Y21WaFpDSjlMRnNpYzNSaGNuUnpMWGRwZEdnaUxDSWthMlY1SWl3aVpHVjJMell5TWpnMU5qY3hNR013WmpWa00ySXdNREl3TjJGa055SmRMRnNpYzNSaGNuUnpMWGRwZEdnaUxDSWtRMjl1ZEdWdWRDMVVlWEJsSWl3aUlsMHNleUppZFdOclpYUWlPaUp3Y0MwNWJ6QmxaV1JpYm1neU1UVWlmU3g3SWxndFFXMTZMVUZzWjI5eWFYUm9iU0k2SWtGWFV6UXRTRTFCUXkxVFNFRXlOVFlpZlN4N0lsZ3RRVzE2TFVOeVpXUmxiblJwWVd3aU9pSkJTMGxCV2sxRFRraEdNelpEU0ZsU016UTBXQzh5TURJeU1ETXdPUzloY0MxemIzVjBhR1ZoYzNRdE1pOXpNeTloZDNNMFgzSmxjWFZsYzNRaWZTeDdJbGd0UVcxNkxVUmhkR1VpT2lJeU1ESXlNRE13T1ZRd056STNNRFJhSW4xZGZRPT0iLCJYLUFtei1TaWduYXR1cmUiOiJhMDg5ZTc1YWU4NTFlMGZlYWZjZjU5MGIwY2Q2YTM0YTRhMzc1ZjM5YzMxYjBiMTdiMDdlNzg2YTA0NTU1YzkzIn19LCJ1c2VySWQiOiI2MjI4NTY3MTBjMGY1ZDNiMDAyMDdhZDciLCJ3YWxsZXRBZGRyZXNzIjoiMHhmN2MzYTAyOEYxMmM2NTA1NkFlQUVFODEyODc0MTBjZDUzMDM4ZTlBIiwiaWF0IjoxNjQ2ODEwODI0LCJleHAiOjE2NDY5ODM2MjR9.h0TcEWJ_6Wmu8UynqWMZj3ryt_g_reLy_uBqij0prpA',
            },
            transformResponse: (res) => {
              return { uploadURL: JSON.parse(res).uploadURL, key: JSON.parse(res).key };
            },
          }
        )
        .then(
          async (response: any) => {
            const uploadUrl = response.data.uploadURL;
            const key = response.data.key;
            const blob = await this.getBlob(file);
            axios
              .put(uploadUrl, blob, {
                headers: {
                  'Content-Type': Platform.OS === 'ios' ? 'video/quicktime' : 'video/mp4',
                },
                transformResponse: (d) => d,
                transformRequest: (d) => d,
              })
              .then(
                (data) => {
                  console.log('video file ', key);
                  console.log('video created ', data);
                },
                (err) => {
                  //   console.log('err22 ', err);
                }
              );
            onUploadProgress;
          },
          (err) => {
            // console.log('err12', err);
          }
        );
    } catch (ex) {
      //  console.log('ex2', ex);
    }
  }
}
export default new UploadFilesService();

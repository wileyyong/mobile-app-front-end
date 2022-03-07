import http from './http';
import axios, { AxiosRequestConfig } from 'axios';
import RNFS from 'react-native-fs';

class UploadFilesService {
  getBlob = async (fileUri: string) => {
    /*const resp = await fetch(fileUri);
    const imageBody = await resp.blob();
    return imageBody;*/
    console.log('fetch ', fileUri);
    //const data = await RNFetchBlob.fs.readStream(fileUri, 'utf8');
    // console.log('data', data);
  };
  async upload(videoTitle: string, file: string, userId?: string, onUploadProgress?: any) {
    //62135e19a11f1745a465dbdb

    let formData = new FormData();
    userId = '62135e19a11f1745a465dbdb';
    formData.append('bucket', 'pp-9o0eedbnh215');
    formData.append('X-Amz-Algorithm', 'AWS4-HMAC-SHA256');
    formData.append(
      'X-Amz-Credential',
      'AKIAZMCNHF36CHYR344X/20220304/ap-southeast-2/s3/aws4_request'
    );
    formData.append('X-Amz-Date', '20220304T071621Z');
    formData.append(
      'Policy',
      'eyJleHBpcmF0aW9uIjoiMjAyMi0wMy0wNlQwNzoxNjoyMVoiLCJjb25kaXRpb25zIjpbeyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIka2V5IiwiZGV2LzYyMTM1ZTE5YTExZjE3NDVhNDY1ZGJkYiJdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0seyJidWNrZXQiOiJwcC05bzBlZWRibmgyMTUifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBS0lBWk1DTkhGMzZDSFlSMzQ0WC8yMDIyMDMwNC9hcC1zb3V0aGVhc3QtMi9zMy9hd3M0X3JlcXVlc3QifSx7IlgtQW16LURhdGUiOiIyMDIyMDMwNFQwNzE2MjFaIn1dfQ=='
    );
    formData.append(
      'X-Amz-Signature',
      'dc4aa1abc03becc00b4d821c43e0011c8714d9fd7c2550715d459ecca6d538ba'
    );
    formData.append('acl', 'public-read');
    formData.append('Content-Type', 'video/mp4');
    formData.append('key', 'dev/62135e19a11f1745a465dbdb/videos/videotest.mp4');
    // const fileStream = await RNFetchBlob.fs.readStream(file, 'utf8');
    // formData.append('file', { file: fileStream });
    formData.append('bucket', 'pp-9o0eedbnh215');

    return http.post('/pp-9o0eedbnh215', formData, {
      onUploadProgress,
      transformResponse: (data) => {
        console.log('response', data);
      },
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  async uploadv2(videoTitle: string, file: string, userId?: string, onUploadProgress?: any) {
    console.log('uploadv2 ', file);

    var uploadBegin = (response: any) => {
      console.log('uploadBegin response', response);
      /*  var jobId = response.jobId;
      console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);*/
    };

    var uploadProgress = (response: any) => {
      /*   var percentage = Math.floor(
        (response.totalBytesSent / response.totalBytesExpectedToSend) * 100
      );
      console.log('UPLOAD IS ' + percentage + '% DONE!');*/
      console.log('uploadProgress response', response);
    };

    userId = '62135e19a11f1745a465dbdb';

    const name = 'helloworld'; //file.split('/')[file.split('/').length - 1].replace('.mp4', '');
    const filename = file.split('/')[file.split('/').length - 1];
    console.log('name', name);
    console.log('filename', filename);
    console.log('path', file.replace('file://', ''));
    console.log('filoe server', 'dev/62135e19a11f1745a465dbdb/videos/' + filename);

    const newPath = `${RNFS.DocumentDirectoryPath}/${filename}`;

    // COPY the file
    await RNFS.copyFile(file.replace('file://', ''), newPath)
      .then((success) => {
        console.log('COPIED!');
        console.log(newPath);
        file = newPath;
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log('new file', file);

    // upload files
    await RNFS.uploadFiles({
      toUrl: 'https://s3.ap-southeast-2.amazonaws.com/pp-9o0eedbnh215',
      files: [
        {
          name: name,
          filename: filename,
          filepath: file.replace('file://', ''),
          filetype: 'video/mp4',
        },
      ],
      method: 'POST',
      headers: {
        bucket: 'pp-9o0eedbnh215',
        'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
        'X-Amz-Credential': 'AKIAZMCNHF36CHYR344X/20220304/ap-southeast-2/s3/aws4_request',
        'X-Amz-Date': '20220304T071621Z',
        Policy:
          'eyJleHBpcmF0aW9uIjoiMjAyMi0wMy0wNlQwNzoxNjoyMVoiLCJjb25kaXRpb25zIjpbeyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIka2V5IiwiZGV2LzYyMTM1ZTE5YTExZjE3NDVhNDY1ZGJkYiJdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0seyJidWNrZXQiOiJwcC05bzBlZWRibmgyMTUifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBS0lBWk1DTkhGMzZDSFlSMzQ0WC8yMDIyMDMwNC9hcC1zb3V0aGVhc3QtMi9zMy9hd3M0X3JlcXVlc3QifSx7IlgtQW16LURhdGUiOiIyMDIyMDMwNFQwNzE2MjFaIn1dfQ==',
        'X-Amz-Signature': 'dc4aa1abc03becc00b4d821c43e0011c8714d9fd7c2550715d459ecca6d538ba',
        acl: 'public-read',
        key: 'dev/62135e19a11f1745a465dbdb/videos/' + filename,
      },
      begin: uploadBegin,
      progress: uploadProgress,
    })
      .promise.then((response: any) => {
        console.log('upload sucess', response);
      })
      .catch((err: any) => {
        console.log('upload error', err);
      })
      .finally(() => {
        console.log('finaly');
      });
  }
}
export default new UploadFilesService();

/*   
   curl --location --request POST 'https://s3.ap-southeast-2.amazonaws.com/pp-9o0eedbnh215'
    --form 'bucket="pp-9o0eedbnh215"'
     --form 'X-Amz-Algorithm="AWS4-HMAC-SHA256"' 
     --form 'X-Amz-Credential="AKIAZMCNHF36CHYR344X/20220304/ap-southeast-2/s3/aws4_request"' 
     --form 'X-Amz-Date="20220304T071621Z"'
      --form 'Policy="eyJleHBpcmF0aW9uIjoiMjAyMi0wMy0wNlQwNzoxNjoyMVoiLCJjb25kaXRpb25zIjpbeyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIka2V5IiwiZGV2LzYyMTM1ZTE5YTExZjE3NDVhNDY1ZGJkYiJdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0seyJidWNrZXQiOiJwcC05bzBlZWRibmgyMTUifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBS0lBWk1DTkhGMzZDSFlSMzQ0WC8yMDIyMDMwNC9hcC1zb3V0aGVhc3QtMi9zMy9hd3M0X3JlcXVlc3QifSx7IlgtQW16LURhdGUiOiIyMDIyMDMwNFQwNzE2MjFaIn1dfQ=="'
       --form 'X-Amz-Signature="dc4aa1abc03becc00b4d821c43e0011c8714d9fd7c2550715d459ecca6d538ba"'
       --form 'acl="public-read"'
        --form 'Content-Type="image/jpeg"'
         --form 'key="dev/62135e19a11f1745a465dbdb/profile/test2.jpeg"' 
      --form 'file=@"/Users/amitpersonal/Desktop/test.png"'
       --form 'bucket="pp-9o0eedbnh215"'
      // var axios = require('axios');
  /*
  let data = new FormData();
 
  data.append('bucket', 'pp-9o0eedbnh215');
  data.append('X-Amz-Algorithm', 'AWS4-HMAC-SHA256');
  data.append('X-Amz-Credential', 'AKIAZMCNHF36CHYR344X/20220304/ap-southeast-2/s3/aws4_request');
  data.append('X-Amz-Date', '20220304T100442Z');
  data.append('Policy', 'eyJleHBpcmF0aW9uIjoiMjAyMi0wMy0wNlQxMDowNDo0MloiLCJjb25kaXRpb25zIjpbeyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIka2V5IiwiZGV2LzYyMTM1ZTE5YTExZjE3NDVhNDY1ZGJkYiJdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0seyJidWNrZXQiOiJwcC05bzBlZWRibmgyMTUifSx7IlgtQW16LUFsZ29yaXRobSI6IkFXUzQtSE1BQy1TSEEyNTYifSx7IlgtQW16LUNyZWRlbnRpYWwiOiJBS0lBWk1DTkhGMzZDSFlSMzQ0WC8yMDIyMDMwNC9hcC1zb3V0aGVhc3QtMi9zMy9hd3M0X3JlcXVlc3QifSx7IlgtQW16LURhdGUiOiIyMDIyMDMwNFQxMDA0NDJaIn1dfQ==');
  data.append('X-Amz-Signature', 'a673b7556f0babe733fc8f6ee7bc6a015effd0934ad464435db68fcb9bcb3a9a');
  data.append('acl', 'public-read');
  data.append('Content-Type', 'multipart/form-data');
  data.append('key', '/dev/62135e19a11f1745a465dbdb/videos/newvideo.mp4');
  data.append('file', file );
  data.append('bucket', 'pp-9o0eedbnh215');
  
  

return fetch('https://s3.ap-southeast-2.amazonaws.com/pp-9o0eedbnh215',{
  method: 'post',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  body: data
  }).then((response:any) => {
    console.log("video uploaded uploaded",response)
  }).catch((err:any) => {
    console.log(err)
  })  */
/*
 return http.post('/pp-9o0eedbnh215',
  data,
  {  
    onUploadProgress,
  decompress:false,
  transformResponse:(data)=>{
    console.log('response',data)
  },
  headers:{ 'content-type': 'multipart/form-data'}
});*/

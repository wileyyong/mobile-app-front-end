const getBlob = async (fileURI: string) => {
  const resp = await fetch(fileURI);
  const imageBody = await resp.blob();
  return imageBody;
};

const Uploader = {
  async uploadImage(uploadURL: string, data: string) {
    const imageBody = await getBlob(data);
    await fetch(uploadURL, {
      method: 'PUT',
      body: imageBody,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        Sentry.captureException(error);
      });
  },
};

export default Uploader;

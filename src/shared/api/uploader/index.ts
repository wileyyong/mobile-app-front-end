const getBlob = async (fileURI: string) => {
  const resp = await fetch(fileURI);
  const imageBody = await resp.blob();
  return imageBody;
};

const Uploader = {
  async uploadImage(uploadURL: string, data: string) {
    const imageBody = await getBlob(data);
    const result = await fetch(uploadURL, {
      method: "PUT",
      body: imageBody,
    });
  }
};

export default Uploader;

import axios from "axios";

const flickr = axios.create({
  baseURL: "https://www.flickr.com/services/rest/"
});

export const fetchPhotosets = () => {
  return flickr.get("", {
    params: {
      method: "flickr.photosets.getList",
      api_key: "31f36d6fcfbca631408fac6570d8cd0c",
      user_id: "186596335@N03",
      format: "json",
      nojsoncallback: "1"
    }
  });
};

export const fetchPhotos = async photosetId => {
  return await flickr.get("", {
    params: {
      method: "flickr.photosets.getPhotos",
      api_key: "31f36d6fcfbca631408fac6570d8cd0c",
      photoset_id: photosetId,
      user_id: "186596335@N03",
      format: "json",
      nojsoncallback: "1"
    }
  });
};

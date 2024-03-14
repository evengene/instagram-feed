import axios from 'axios';

const INSTAGRAM_API_URL = 'https://graph.instagram.com';

export const getImages = async (accessToken: string) => {
  const response = await axios.get(
    ///me/media?fields=id,caption,media_url&access_token=
    `${INSTAGRAM_API_URL}/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${accessToken}`,
  );
  return response.data;
}

export const uploadImage = async (accessToken: string, image: string) => {
  const response = await axios.post(
    `${INSTAGRAM_API_URL}/me/media?image_url=${image}&access_token=${accessToken}`,
  );
  return response.data;
}
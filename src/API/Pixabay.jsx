import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '31600470-cb6dfcad8308a56e880daea1a';

export async function fetchPictures(name, page = 1) {
  try {
    const resp = await axios.get(
      `?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=15`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

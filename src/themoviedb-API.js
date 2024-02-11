import axios from 'axios';

export const BASE_URL = 'https://www.themoviedb.org/';
const API_KEY = '7e3beca21578245d33161aa546b97c5e';

export const getAPI = async (query, page) => {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(url);

  return response.data;
};

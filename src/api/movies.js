import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '163c321dbb11d99503a707d857a1af3f',
  },
});

export const getTrending = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getMovieInfo = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const getActors = async movieId => {
  const { data } = await instance.get(`movie/${movieId}/credits`);
  return data;
};

export const getReviews = async movieId => {
  const { data } = await instance.get(`movie/${movieId}/reviews`);
  return data;
};

// search
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '163c321dbb11d99503a707d857a1af3f';

export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US`
  );
  return data;
};

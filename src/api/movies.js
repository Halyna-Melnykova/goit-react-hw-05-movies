import axios from 'axios';

// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/trending/movie/day',
//   params: {
//     api_key: '163c321dbb11d99503a707d857a1af3f',
//   },
// });

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '163c321dbb11d99503a707d857a1af3f';

export const fetchTrending = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}`
  );
  return data;
};

// fetch(
//   'https://api.themoviedb.org/3/trending/all/day?api_key=163c321dbb11d99503a707d857a1af3f'
// );

// export const searchPhotos = async (q, page = 1) => {
//     const { data } = await instance.get('/', {
//       params: {
//         page,
//         q,
//       },
//     });
//     return data;
//   };

import axios from 'axios';

const API_KEY = 'ab290b9ac3d51cd9ec545a0b6eb96b92';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjI5MGI5YWMzZDUxY2Q5ZWM1NDVhMGI2ZWI5NmI5MiIsInN1YiI6IjY1YzI0YTAxYTMzNjEyMDBlNjUzYTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPtrdl2CeCwFN8Vh-UEzJf-KQ5SS8ZaqztMaE2eqoSY';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer   eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjI5MGI5YWMzZDUxY2Q5ZWM1NDVhMGI2ZWI5NmI5MiIsInN1YiI6IjY1YzI0YTAxYTMzNjEyMDBlNjUzYTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kPtrdl2CeCwFN8Vh-UEzJf-KQ5SS8ZaqztMaE2eqoSY',
  },
};

export const getTrending = () => {
  return instance.get(
    `/trending/movie/day?language=en-US&api_key=${API_KEY}`,
    options
  );
};

export const searchMovies = query => {
  return instance.get(`/search/movie?language=en-US&api_key=${API_KEY}`, {
    ...options,
    params: {
      query,
    },
  });
};

export const getMovieDetails = id => {
  return instance.get(
    `/movie/${id}?language=en-US&api_key=${API_KEY}`,
    options
  );
};

export const getMovieCast = id => {
  return instance.get(
    `/movie/${id}/credits?language=en-US&api_key=${API_KEY}`,
    options
  );
};

export const getMovieReviews = id => {
  return instance.get(
    `/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`,
    options
  );
};

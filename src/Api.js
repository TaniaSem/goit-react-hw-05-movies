import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '6b9a3fed645205c8f486b0eeae6f2de6';
const url = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  try {
    const responce = await axios.get(
      `${url}/trending/movie/week?api_key=${API_KEY}`
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure(`Sorry, try again ${error} `);
    throw new Error(`Sorry, try again ${error}`);
  }
};

export const getSearchMovies = async query => {
  try {
    const responce = await axios.get(
      `${url}/search/${query}?api_key=${API_KEY}`
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure(`Sorry, try again ${error} `);
    throw new Error(`Sorry, try again ${error}`);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const responce = await axios.get(
      `${url}/movie/${movieId}?api_key=${API_KEY}`
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure(`Sorry, try again ${error} `);
    throw new Error(`Sorry, try again ${error}`);
  }
};

export const getMovieCredit = async creditId => {
  try {
    const responce = await axios.get(
      `${url}/credit/${creditId}?api_key=${API_KEY}`
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure(`Sorry, try again ${error} `);
    throw new Error(`Sorry, try again ${error}`);
  }
};

export const getMovieReview = async reviewId => {
  try {
    const responce = await axios.get(
      `${url}/review/${reviewId}?api_key=${API_KEY}`
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure(`Sorry, try again ${error} `);
    throw new Error(`Sorry, try again ${error}`);
  }
};

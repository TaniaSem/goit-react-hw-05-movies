import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '6b9a3fed645205c8f486b0eeae6f2de6';

export const getPopularMovies = async () => {
  try {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
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
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure(`Sorry, try again ${error} `);
    throw new Error(`Sorry, try again ${error}`);
  }
};

export const getMovieDetails = async id => {
  try {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure(`Sorry, try again ${error} `);
    throw new Error(`Sorry, try again ${error}`);
  }
};

export const getMovieCredit = async id => {
  try {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure(`Sorry, try again ${error} `);
    throw new Error(`Sorry, try again ${error}`);
  }
};

export const getMovieReview = async id => {
  try {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure(`Sorry, try again ${error} `);
    throw new Error(`Sorry, try again ${error}`);
  }
};

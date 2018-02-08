import key from './api/key.js';

export const initialFetch = async() => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
  const initialFetch = await fetch(url);
  const response = await initialFetch.json();
  return cleanMovies(response);
};

export const cleanMovies = (response) => {
  const movies = response.results.map(({ title, overview, poster_path, backdrop_path, id }) => {
    return { title, overview, poster: poster_path, backdrop: backdrop_path, id };
  });
  return Promise.all(movies);
};

export const registerUser = async user => {
  try {
    const url='/api/users/new';
    const register = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    return await register.json();
  } catch (error) {
    return false;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const url = '/api/users/';
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json"
      }
    });
    return await response.json();
  } catch (error) {
    return false;
  }
};

import key from './api/key.js';

export const initialFetch = async() => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
  const initialFetch = await fetch(url);
  const response = await initialFetch.json();
  console.log(response)
  return cleanMovies(response);
};

export const cleanMovies = (response) => {
  const movies = response.results.map(({ title, overview, poster_path, backdrop_path, id, vote_average, release_date }) => {
    return { title, overview, poster_path, backdrop_path, movie_id: id, vote_average, release_date };
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

export const postFavorite = async (movie, user) => {
  try {
    const url='api/users/favorites/new';
    
    const posted = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          movie_id: movie.movie_id,
          user_id: user.id,
          title: movie.title,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          vote_average: movie.vote_average,
          overview: movie.overview
        })
    });

    return await posted.json();
  } catch (error) {
    throw new Error('error message for add favorite');
  }
};

export const retrieveFavorites = async user => {
  console.log(user)
  try {
    const url=`api/users/${user.id}/favorites/`; 
    const retrieved = await fetch(url)

    return await retrieved.json();
  }
  catch(error) {
    throw new Error('could not retrieve user favorites')
  }
}

import key from './api/key.js';

export const initialFetch = async() => {
  try {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
    const initialFetch = await fetch(url);
    if (initialFetch.status > 200) {
      throw new Error('could not fetch movies');
    } else {
      return await initialFetch.json();
    }
  } catch (error) {
    throw error;
  }
};

export const cleanMovies = (response) => {
  return response.results.map(({ title, overview, poster_path, backdrop_path, id, vote_average, release_date }) => {
    return { title, overview, poster_path, backdrop_path, movie_id: id, vote_average, release_date };
  });
};

export const cleanFavorites = (favorites) => {
  return favorites.map(movie => {
    movie.favorite = true;
    return movie;
  });
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
    if (register.status > 200) {
      throw new Error('could not register user');
    } else {
      return await register.json();
    }
  } catch (error) {
    return false;
  }
};

export const postUser = async ({ email, password }) => {
  try {
    const url = '/api/users/';
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status > 200) {
      throw new Error('could not post user');
    } else {
      return await response.json();
    }
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
          overview: movie.overview,
          backdrop_path: movie.backdrop_path,
          favorite: movie.favorite
        })
    });
    if (posted.status > 200) {
      throw new Error('could not add favorite');
    } else {
      return await posted.json();
    }
  } catch (error) {
    throw error
  }
};

export const retrieveFavorites = async userId => {
  try {
    const url=`api/users/${userId}/favorites/`;
    const retrieved = await fetch(url)

    if (initialFetch.status > 200) {
      throw new Error('could not fetch favorites');
    } else {
      return await retrieved.json();
    }
  }
  catch(error) {
    throw new Error('could not retrieve user favorites')
  }
}

export const deleteFavorite = async ({ movie_id  }, { id }) => {
  try {
    const url=`api/users/${id}/favorites/${movie_id}`;
    const deleted = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id, movie_id})
    });
    if (initialFetch.status > 200) {
      throw new Error('could not delete user favorite');
    } else {
      return await deleted.json();
    }
  } catch (error) {
    throw new Error('could not delete user favorite');
  }
};

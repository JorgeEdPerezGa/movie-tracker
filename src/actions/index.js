export const addMovies = (movies) => {
  return {
    type: 'ADD_MOVIES',
    movies
  };
};

export const updateMovies = (movie) => {
  return {
    type: 'UPDATE_MOVIES',
    movie
  }
}

export const addUser = (user) => { 
  return {
    type: 'ADD_USER',
    user
  };
};

export const logoutUser = (user) => {
  return {
    type: 'LOGOUT_USER',
    user
  };
};

export const toggleFavorite = (movie) => {
  return {
    type: 'ADD_FAVORITE',
    movie
  }
}

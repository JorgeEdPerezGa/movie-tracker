export const addMovies = (movies) => {
  return {
    type: 'ADD_MOVIES',
    movies
  };
};

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
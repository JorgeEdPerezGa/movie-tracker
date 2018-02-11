export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const logoutUser = user => ({
  type: 'LOGOUT_USER',
  user
});

export const addMovies = movies => ({
    type: 'ADD_MOVIES',
    movies
});

export const updateMovies = movie => ({
  type: 'UPDATE_MOVIES',
  movie
});

export const addFavorite = movie => ({
  type: 'ADD_FAVORITE',
  movie
});

export const removeFavorite = movie => ({
    type: 'REMOVE_FAVORITE',
    movie
});

export const addAllFavorites = movies => ({
    type: 'ADD_ALL_FAVORITES',
    movies
});

export const clearFavorites = () => ({
  type: 'CLEAR_FAVORITES'
});



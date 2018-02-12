export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, action.movie];
  case 'REMOVE_FAVORITE':
    return state.filter(movie => movie.title !== action.movie.title);
  case 'ADD_ALL_FAVORITES':
    return [...action.movies];
  case 'CLEAR_FAVORITES':
    return [];
  default: return state;
  }
};

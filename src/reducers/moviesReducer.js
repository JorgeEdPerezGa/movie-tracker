export const moviesReducer = (store = [], action) => {
  switch (action.type) {
  case 'ADD_MOVIES':
    return [...store, ...action.movies];
  default:
    return store;
  }
};

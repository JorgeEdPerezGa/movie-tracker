export const moviesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_MOVIES':
    return [...state, ...action.movies];
  case 'UPDATE_MOVIES':
    const movies = state.map(mov => {
      if ( mov.title ===  action.movie.title ) {
        return action.movie
      }
      return mov
    })
    return [...movies]
  default:
    return state;
  }
};

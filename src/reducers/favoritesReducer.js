export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
  case 'ADD_FAVORITE':
    const filteredFavs = state.filter(
      favorite => action.movie.title !== favorite.title)
    return state.some(movie => movie.name === action.movie.name) ? filteredFavs : [...filteredFavs, action.movie]
  default: return state
  }
}


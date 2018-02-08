export const moviesReducer = (state = [], action) => {
  switch(action.type) {
  case 'ADD_FAVORITE':
      return [...state, action.movie]
  default: return state
  }
}
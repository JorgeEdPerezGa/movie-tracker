export const userReducer = (store = {}, action) => {
  switch (action.type) {
  case 'ADD_USER':
    return { ...action.user };
  default:
    return store;
  }
};

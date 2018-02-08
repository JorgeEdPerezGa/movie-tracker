export const userReducer = (store = {}, action) => {
  switch (action.type) {
  case 'ADD_USER':
    return { ...action.user };
  case 'LOGOUT_USER':
    return {};
  default:
    return store;
  }
};

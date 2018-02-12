import { userReducer } from './userReducer';
import * as actions from '../actions';

describe('userReducer', () => {
  let user;

  beforeAll(() => {
    user = {
      email: "fake@123.com",
      id: 2,
      name: "ted",
      password: "pw123"
    };
  });

  it('should return the default state', () => {
    const expected = {};
    expect(userReducer(undefined, {})).toEqual(expected);
  });

  it('ADD_USER should return the state with the user added', () => {
    const action = actions.addUser(user);
    const expected = user;
    expect(userReducer(undefined, action)).toEqual(expected);
  });

  it('LOGOUT_USER should return the state with the user removed', () => {
    const action = actions.logoutUser(user);
    const state = user;
    const expected = {};
    expect(userReducer(state, action)).toEqual(expected);
  });
});

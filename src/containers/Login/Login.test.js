import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Login } from './Login';

import helper, { mockHelper } from '../../helper'
jest.mock('../../helper')

describe('Login', () => {
  let renderedComponent
  let mockLoginUser
  let mockAddAllFavorites
  let mockUpdateMovies
  let favorites
  let mockHistory

  beforeAll(() => {
    favorites = [
      {
        "backdrop_path": "/dddddd.jpg",
        "movie_id": 354912,
        "overview": "Despite his famil...",
        "poster_path": "/ffff.jpg",
        "release_date": "2017-10-27",
        "title": "Coco",
        "vote_average": 7.7,
        "favorite": true
      }
    ]
  })

  beforeEach(() => {
    mockLoginUser = jest.fn()
    mockAddAllFavorites = jest.fn()
    mockUpdateMovies = jest.fn()
    mockHistory = { push: jest.fn() }
    window.fetch = jest.fn()

    renderedComponent = shallow(
      <Login 
        loginUser={mockLoginUser}
        addAllFavorites={mockAddAllFavorites}
        updateMovies={mockUpdateMovies}
        history={mockHistory}
      />
    )
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should start with the expected default state', () => {
    const expected = { email: '', password: '', "error": false }

    expect(renderedComponent.state()).toEqual(expected)
  })

  it('should update state on handleChange', () => {
    expect(renderedComponent.state()).toEqual({ email: '', password: '', "error": false })

    renderedComponent.instance().handleChange({ target: { name: 'email', value: 'aaa' } })

    expect(renderedComponent.state()).toEqual({ email: 'aaa', password: '', "error": false })

    renderedComponent.instance().handleChange({ target: { name: 'password', value: 'bbb' } })
    expect(renderedComponent.state()).toEqual({ email: 'aaa', password: 'bbb', "error": false })
  })

  it('should call updateMovies on handleRetrievedFavorites', () => {
    expect(mockUpdateMovies).not.toHaveBeenCalled()

    renderedComponent.instance().handleRetrievedFavorites(favorites)
    expect(mockUpdateMovies).toHaveBeenCalled()
  })

  it('should call addAllFavorites on handleRetrievedFavorites', () => {
    expect(mockAddAllFavorites).not.toHaveBeenCalled()

    renderedComponent.instance().handleRetrievedFavorites(favorites)
    expect(mockAddAllFavorites).toHaveBeenCalled()
  })

  it('handleSubmit should call postUser with the expected params', () => {
    const expected = {email: 'fake', password: 'uncrackable', "error": false}
    const mockEvent = { preventDefault: jest.fn() }

    renderedComponent.setState(expected)

    expect(window.fetch).not.toHaveBeenCalled()

    renderedComponent.instance().handleSubmit(mockEvent )

    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('handleSubmit should call loginUser with the expected params', () => {
    const state = {email: 'one', password: 'two', "error": false}
    const mockEvent = { preventDefault: jest.fn() }

    renderedComponent.setState(state)

    expect(window.fetch).not.toHaveBeenCalled()

    renderedComponent.instance().handleSubmit(mockEvent )

    expect(window.fetch).toHaveBeenCalledWith(state)
  })

  it('should match snapshot when rendering alert', () => {
    renderedComponent.setState({error: true});
    renderedComponent.update();
    expect(renderedComponent).toMatchSnapshot()
  })

})
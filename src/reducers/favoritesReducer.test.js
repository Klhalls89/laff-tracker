import { favoritesReducer } from './favoritesReducer'
import * as actions from '../actions'

describe('favoritesReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = favoritesReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return an array of favorites', () => {
    const expected = [{title: 'Big Fat Greek Wedding'}]
    const action = actions.storeFavorites([{title: 'Big Fat Greek Wedding'}])
    const initialState = []
    const result = favoritesReducer(initialState, action)
    expect(result).toEqual(expected)
  })
})
import { moviesReducer } from './moviesReducer'
import * as actions from '../actions'

describe('moviesReducer', () => {
  it('should return the inital state', () => {
    const expected = []
    const result = moviesReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should store a movie to state', () => {
    const expected = [{title: 'She\'s All That'}]
    const intialState = []
    const action = actions.storeMovies([{title: 'She\'s All That'}])
    const result = moviesReducer(intialState, action)
    expect(result).toEqual(expected)
  })

})

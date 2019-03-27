import { userReducer } from './userReducer'
import * as actions from '../actions'

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {}
    const result = userReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the state with a new user', () => {
    const expected = {name: 'Taylor', id: 1}
    const initialState = {}
    const action = actions.signIn('Taylor', 1)
    const result = userReducer(initialState, action)
    expect(result).toEqual(expected)
  })

  it('should return state with an empty user object', () => {
    const expected = {}
    const initialState = {name: 'Taylor', id: 1}
    const action = actions.signOut()
    const result = userReducer(initialState, action)
    expect(result).toEqual(expected)
  })
})


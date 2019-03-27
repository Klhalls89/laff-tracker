import { movieCleaner } from '../cleaner'
import * as actions from '../actions'

export const fetchMovies = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      console.log('data', data)
      const cleanData = await movieCleaner(data)
      console.log('clean data', cleanData)
      const moviesData = await dispatch(actions.storeMovies(cleanData))
    } catch (error) {
      console.log(error)
    } 
  }
}


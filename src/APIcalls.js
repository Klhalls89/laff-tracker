import { movieCleaner } from './cleaner'

const API_KEY = `${process.env.REACT_APP_API_KEY}`

export const signIn = async (userInfo) => {
  try {
    const url = 'http://localhost:3000/api/users'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const userData = await response.json()
    return {
      status: userData.status,
      name: userData.data.name,
      id: userData.data.id
    }
  } catch(error) {
    return 'Username or password are incorrect'
  }
}

export const signUp = async (userInfo) => {
  try {
    const url = 'http://localhost:3000/api/users/new'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const newUser = await response.json()
    return newUser.status
  } catch(error) {
      return error
  }
}

export const fetchMovies = async () => {
  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=35'
  const response = await fetch(url)
  const movies = await response.json()
  const cleanMovies = await movieCleaner(movies)
  return cleanMovies
}

export const addFavorite = async (movie_id, user_id, movie) => {
  const url = 'http://localhost:3000/api/users/favorites/new'
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({movie_id, user_id, title: movie.title, poster_path: movie.poster_path, release_date: movie.release_date, vote_average: movie.vote_average, overview: movie.overview}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const newFavorite = await response.json()
  console.log('newFavorite!', newFavorite)
}

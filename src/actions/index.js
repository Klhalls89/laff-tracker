export const signIn = (name, id) => ({
  type: 'SIGN_IN',
  name,
  id
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const storeMovies = (movies) => ({
  type: 'STORE_MOVIES',
  movies
})

export const storeFavorites = (favorites) => ({
  type: 'STORE_FAVORITES',
  favorites
})
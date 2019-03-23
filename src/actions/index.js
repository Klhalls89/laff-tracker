export const signIn = (name, id) => ({
  type: 'SIGN_IN',
  name,
  id
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const displayMovies = (movies) => ({
  type: 'DISPLAY_MOVIES',
  movies
})
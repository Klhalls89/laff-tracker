export const signIn = (email, name) => ({
  type: 'SIGN_IN',
  email,
  name
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})
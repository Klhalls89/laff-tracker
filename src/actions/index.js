export const signIn = (id, name) => ({
  type: 'SIGN_IN',
  id,
  name
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})
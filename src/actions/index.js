export const signIn = (name, id) => ({
  type: 'SIGN_IN',
  name,
  id
})

export const signOut = () => ({
  type: 'SIGN_OUT'
})
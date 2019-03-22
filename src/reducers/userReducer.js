export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { email: action.email, name: action.name }
    case 'SIGN_OUT':
      return {}
    default: 
      return state
  }
}
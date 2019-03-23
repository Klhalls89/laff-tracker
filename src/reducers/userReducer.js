export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { name: action.name, id: action.id }
    case 'SIGN_OUT':
      return {}
    default: 
      return state
  }
}
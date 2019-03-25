export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_FAVORITES':
      return action.favorites
    default:
      return state
  }
}
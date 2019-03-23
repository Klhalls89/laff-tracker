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

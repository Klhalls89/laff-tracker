export const signIn = async () => {
  const url = 'http://localhost:3000/api/users'
  const response = await fetch(url)
  const users = await response.json()
  return users
}


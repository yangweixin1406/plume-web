export const getToken = () => {
  return localStorage.getItem('token')
}

export const token = (token) => {
  return localStorage.setItem('token', token)
}
import axios from 'axios'
const API_URL = 'https://reqres.in/api/login'
const register = (username, email, password) => {
  return axios.post(API_URL, {
    username,
    email,
    password,
  })
}
const login = (email, password) => {
  return axios
    .post(API_URL, {
      email,
      password,
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}
const logout = () => {
  localStorage.removeItem('user')
}
const getCurrentUser = key => {
  return JSON.parse(localStorage.getItem(key) || '{}')
}
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}
export default AuthService

import axios from 'axios'
const baseURL = 'https://reqres.in/api/users/'
const fetchData = setUser => {
  return axios.get(baseURL).then(response => {
    const users = response.data.data
    setUser(users)
    console.log(users)
  })
}
export { fetchData }

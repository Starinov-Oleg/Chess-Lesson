import axios from 'axios'

export default axios.create({
  baseURL: 'https://catfact.ninja/fact',
  headers: {
    'Content-type': 'application/json',
  },
})

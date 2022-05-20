import axios from 'axios'

export const UserService = {
  async getuser() {
    return axios.get<any[]>(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users`).then(res => res.data)
  },
}

import axios from 'axios'

export const UserService = {
  async getuser() {
    return axios.get<any[]>(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users`).then(res => res.data)
  },
  async adduser(text: string | undefined) {
    return axios
      .post(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/`, {
        email: text,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.data)
  },
}

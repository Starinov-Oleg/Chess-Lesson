import axios from 'axios'

interface AddUser {
  email: string
  password: string
}
export const UserService = {
  async getuser() {
    return axios.get<any[]>(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users`).then(res => res.data)
  },
  async adduser({ email, password }: AddUser) {
    const data = {
      email,
      password,
    }
    return axios
      .post(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/`, {
        email: data.email,
        password: data.password,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.data)
  },
}

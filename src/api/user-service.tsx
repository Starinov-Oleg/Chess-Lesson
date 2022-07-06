import axios from 'axios'

interface AddUser {
  email: string
  password: string
  name: string
}
export const UserService = {
  async getuser() {
    return axios.get<any[]>(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users`).then(res => res.data)
  },
  async adduser({ email, password, name }: AddUser) {
    const data = {
      email,
      password,
      name,
    }
    return axios
      .post(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/`, {
        email: data.email,
        password: data.password,
        name: data.name,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.data)
  },
}

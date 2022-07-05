import axios from 'axios'

export const UserSettingsService = {
  async changeUserName(id: string | undefined, text: string | undefined) {
    return axios
      .put(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}`, {
        name: text,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.data)
  },
  async removeUserId(id: number | never) {
    return axios.delete<string[] | undefined>(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}`)
  },
  async changeUserBirthData(id: string | undefined, data: Date | null) {
    return axios
      .put(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}`, {
        data_birth: data,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.data)
  },
  async changeUserEmail(id: string | undefined, text: string | undefined) {
    return axios
      .put(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}`, {
        email: text,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.data)
  },
}

/**
 
Need fix API for users
 */

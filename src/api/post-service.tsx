import axios from 'axios'

export const PostService = {
  async getPostId(id: any) {
    return axios.get<any[]>(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}/post`).then(res => res.data)
  },
  async addPostId(id: any, text: any) {
    return axios
      .post(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}/post`, {
        body: text,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.data)
  },
  async removePostId(id: any | never, userId: any | never) {
    return axios.delete<any[] | undefined>(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${userId}/post/${id}`)
  },
}

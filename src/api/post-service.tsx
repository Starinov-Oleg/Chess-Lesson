import axios from 'axios'

export const PostService = {
  async getPostId(id: string | undefined) {
    return axios.get(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}/post`).then(res => res.data)
  },
  async addPostId(id: string | undefined, text: string | undefined) {
    return axios
      .post(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}/post`, {
        body: text,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.data)
  },
  async removePostId(id: number | never, userId: string | undefined | never) {
    return axios.delete<string[] | undefined>(
      `https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${userId}/post/${id}`
    )
  },
}

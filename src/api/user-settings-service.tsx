import axios from 'axios'

export const PostService = {
  async addPostId(id: string | undefined, text: string) {
    return axios
      .post(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}`, {
        body: text,
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

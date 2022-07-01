import axios from 'axios'

export const PostService = {
  async addPostId(id: string | undefined, text: string | undefined) {
    return axios
      .put(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}`, {
        name: text,
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

import axios from 'axios'
/** 
export const getUserIdPost = (setPost: any, id: string | undefined) => {
  axios.get(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}/post`).then(response => {
    setPost(response.data)
  })
}
*/
export const removeData = (id: any | never, userId: any | never, setPost: any, setIsOpen: any, post: any) => {
  axios.delete(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${userId}/post/${id}`).then(() => {
    setPost(post.filter((item: { id: any }) => item.id !== id))
    setIsOpen({ show: false, id: null })
  })
}

export const addData = (id: any, text: any, setText: any, setPost: any, post: any) => {
  axios
    .post(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}/post`, {
      body: text,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      setPost([...post, response.data])
      setText('')
    })
}

/**
 * Fixed for react query
 */

export const PostService = {
  async getPostId(id: any) {
    return axios.get<any[]>(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}/post`).then(res => res.data)
  },
  async addPostId(id: any, text: any) {
    return axios.post<any[]>(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users/${id}/post`).then(res => res.data)
  },
}

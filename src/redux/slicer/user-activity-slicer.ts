import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
export const initialState = {
  loading: false,
  error: false,
  posts: [],
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoadingPosts: state => {
      state.loading = true
    },

    setItemsPosts: (state, { payload }) => {
      state.loading = false
      state.error = false
      state.posts = payload
    },
    setErrorPosts: state => {
      state.error = true
    },
  },
})

export const { setLoadingPosts, setItemsPosts, setErrorPosts } = postSlice.actions

export const postSelector = (state: { posts: any }) => state.posts

export default postSlice.reducer

const api = axios.create({
  //baseURL: 'https://reqres.in/api',
  baseURL: 'https://62622400d5bd12ff1e78dbfd.mockapi.io/api',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

// fetch all items
export const fetchData1 = () => {
  return async (dispatch: any, id: number, post: any) => {
    api
      .get(`/users/${id}/post`)
      .then(response => {
        dispatch(setItemsPosts(response.data))
      })
      .catch(er => {
        dispatch(setErrorPosts())
      })
  }
}

import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  loading: false,
  error: false,
  users: [],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoading: state => {
      state.loading = true
    },

    setItems: (state, { payload }) => {
      state.loading = false
      state.error = false
      state.users = payload
    },
    setError: state => {
      state.error = true
    },
  },
})

export const { setLoading, setItems, setError } = userSlice.actions

export const itemsSelector = (state: { users: any }) => state.users

export default userSlice.reducer

const api = axios.create({
  //baseURL: 'https://reqres.in/api',
  baseURL: 'https://62622400d5bd12ff1e78dbfd.mockapi.io/api',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export function fetchData() {
  return (dispatch: any, id: number) => {
    api
      .get(`/users/?${id}`)
      .then(response => {
        dispatch(setItems(response.data))
      })
      .catch(response => {
        return Promise.reject(response.data)
      })
  }
}

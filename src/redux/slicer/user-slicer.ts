import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
export const initialState = {
  loading: false,
  error: false,
  isAuth: false,
  users: [],
}

// our slice
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoading: state => {
      state.loading = true
    },

    setItems: (state, { payload }) => {
      state.loading = false
      state.isAuth = true
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
  baseURL: 'https://reqres.in/api',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

// fetch all items
export function fetchData() {
  return async (dispatch: any, id: any) => {
    api
      .get(`/users/?${id}`)
      .then(response => {
        dispatch(setItems(response.data.data))
      })
      .catch(er => {
        dispatch(setError())
      })
  }
}

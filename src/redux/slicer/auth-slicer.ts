import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface InitialInterface {
  id: null | number
  email: null | string
  password: null | any
  isAuth: boolean
}
const initialState: InitialInterface = {
  id: null,
  email: null,
  password: null,
  isAuth: false,
}

const authSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setAuth: state => {
      state.isAuth = false
    },
    setItemAuth: (state, { payload }) => {
      state.isAuth = false
    },
  },
})
export const { setAuth, setItemAuth } = authSlice.actions

export const authSelector = (state: { isAuth: any }) => state.isAuth

export default authSlice.reducer



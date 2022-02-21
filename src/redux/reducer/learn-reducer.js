import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  { id: 0, video1: 'https://www.youtube.com/embed/OZWRM2WG8Kg', display: false },
  {
    id: 1,
    video2: 'http://www.youtube.com/embed/p1QgNF6J1h0?rel=0&controls=0&hd=1&showinfo=0&enablejsapi=1',
    display: false,
  },
]

const learnSlice = createSlice({
  name: 'learn',
  initialState,
  reducers: {},
})

export default learnSlice.reducer

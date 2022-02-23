import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  { id: 0, video: 'https://www.youtube.com/embed/OZWRM2WG8Kg' },
  {
    id: 1,
    video: 'http://www.youtube.com/embed/p1QgNF6J1h0?rel=0&controls=0&hd=1&showinfo=0&enablejsapi=1',
  },
]

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
})

export default videoSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  { id: 0, title: 'Develop', text: 'here first text', data: '10.02.22' },
  { id: 1, title: 'Develop1', text: 'here first text', data: '10.02.22' },
]

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
})

export default eventsSlice.reducer

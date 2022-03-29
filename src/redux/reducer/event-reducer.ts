import { createSlice } from '@reduxjs/toolkit'

interface InitialEventInterface {
  id: number
  title: string
  text: string
  data: any
}
const initialState: InitialEventInterface[] = [
  { id: 0, title: 'Develop', text: 'here first text', data: '2016 - 01 - 01' },
  { id: 1, title: 'Develop1', text: 'here first text', data: '2016 - 01 - 01' },
]

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
})

export default eventsSlice.reducer

/**TODO date type */

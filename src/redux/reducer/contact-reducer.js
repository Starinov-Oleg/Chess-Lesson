import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  { id: 0, name: 'Dung', text: 'Here text' },
  { id: 1, name: 'Dung1', text: 'Here text1' },
]

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
})

export default contactsSlice.reducer

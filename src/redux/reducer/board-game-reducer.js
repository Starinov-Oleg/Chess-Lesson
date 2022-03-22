import { createSlice } from '@reduxjs/toolkit'
const STYLE = 'STYLE'
const initialState = [
  { id: 0, key: 'a1', style: { background: 'white' } },
  { id: 1, key: 'b1', style: { background: 'black' } },
  { id: 2, key: 'c1', style: { background: 'white' } },
  { id: 3, key: 'd1', style: { background: 'black' } },
  { id: 4, key: 'e1', style: { background: 'white' } },
  { id: 5, key: 'f1', style: { background: 'black' } },
  { id: 6, key: 'g1', style: { background: 'white' } },
  { id: 7, key: 'h1', style: { background: 'black' } },

  { id: 8, key: 'a2', style: { background: 'black' } },
  { id: 9, key: 'b2', style: { background: 'white' } },
  { id: 10, key: 'c2', style: { background: 'black' } },
  { id: 11, key: 'd2', style: { background: 'white' } },
  { id: 12, key: 'e2', style: { background: 'black' } },
  { id: 13, key: 'f2', style: { background: 'white' } },
  { id: 14, key: 'g2', style: { background: 'black' } },
  { id: 15, key: 'h2', style: { background: 'white' } },

  { id: 16, key: 'a3', style: { background: 'white' } },
  { id: 17, key: 'b3', style: { background: 'black' } },
  { id: 18, key: 'c3', style: { background: 'white' } },
  { id: 19, key: 'd3', style: { background: 'black' } },
  { id: 20, key: 'e3', style: { background: 'white' } },
  { id: 21, key: 'f3', style: { background: 'black' } },
  { id: 22, key: 'g3', style: { background: 'white' } },
  { id: 23, key: 'h3', style: { background: 'black' } },

  { id: 24, key: 'a4', style: { background: 'black' } },
  { id: 25, key: 'b4', style: { background: 'white' } },
  { id: 26, key: 'c4', style: { background: 'black' } },
  { id: 27, key: 'd4', style: { background: 'white' } },
  { id: 28, key: 'e4', style: { background: 'black' } },
  { id: 29, key: 'f4', style: { background: 'white' } },
  { id: 30, key: 'g4', style: { background: 'black' } },
  { id: 31, key: 'h4', style: { background: 'white' } },

  { id: 32, key: 'a5', style: { background: 'white' } },
  { id: 33, key: 'b5', style: { background: 'black' } },
  { id: 34, key: 'c5', style: { background: 'white' } },
  { id: 35, key: 'd5', style: { background: 'black' } },
  { id: 36, key: 'e5', style: { background: 'white' } },
  { id: 37, key: 'f5', style: { background: 'black' } },
  { id: 38, key: 'g5', style: { background: 'white' } },
  { id: 39, key: 'h5', style: { background: 'black' } },

  { id: 40, key: 'a6', style: { background: 'black' } },
  { id: 41, key: 'b6', style: { background: 'white' } },
  { id: 42, key: 'c6', style: { background: 'black' } },
  { id: 43, key: 'd6', style: { background: 'white' } },
  { id: 44, key: 'e6', style: { background: 'black' } },
  { id: 45, key: 'f6', style: { background: 'white' } },
  { id: 46, key: 'g6', style: { background: 'black' } },
  { id: 47, key: 'h6', style: { background: 'white' } },

  { id: 48, key: 'a7', style: { background: 'white' } },
  { id: 49, key: 'b7', style: { background: 'black' } },
  { id: 50, key: 'c7', style: { background: 'white' } },
  { id: 51, key: 'd7', style: { background: 'black' } },
  { id: 52, key: 'e7', style: { background: 'white' } },
  { id: 53, key: 'f7', style: { background: 'black' } },
  { id: 54, key: 'g7', style: { background: 'white' } },
  { id: 55, key: 'h7', style: { background: 'black' } },

  { id: 56, key: 'a8', style: { background: 'black' } },
  { id: 57, key: 'b8', style: { background: 'white' } },
  { id: 59, key: 'c8', style: { background: 'black' } },
  { id: 60, key: 'd8', style: { background: 'white' } },
  { id: 61, key: 'e8', style: { background: 'black' } },
  { id: 62, key: 'f8', style: { background: 'white' } },
  { id: 63, key: 'g8', style: { background: 'black' } },
  { id: 64, key: 'h8', style: { background: 'white' } },
]

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case STYLE:
      return {
        ...state,
      }
    default:
      return state
  }
}
export const style = style => ({ type: STYLE })
export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
})
export default boardReducer

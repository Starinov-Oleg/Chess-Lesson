import { createSlice } from '@reduxjs/toolkit'
const STYLE = 'STYLE'
const initialState = [
  { key: 'a1', style: { background: '#3B3838' } },
  { key: 'b1', style: { background: 'white' } },
  { key: 'c1', style: { background: '#3B3838' } },
  { key: 'd1', style: { background: 'white' } },
  { key: 'e1', style: { background: '#3B3838' } },
  { key: 'f1', style: { background: 'white' } },
  { key: 'g1', style: { background: '#3B3838' } },
  { key: 'h1', style: { background: 'white' } },

  { key: 'a2', style: { background: 'white' } },
  { key: 'b2', style: { background: '#3B3838' } },
  { key: 'c2', style: { background: 'white' } },
  { key: 'd2', style: { background: '#3B3838' } },
  { key: 'e2', style: { background: 'white' } },
  { key: 'f2', style: { background: '#3B3838' } },
  { key: 'g2', style: { background: 'white' } },
  { key: 'h2', style: { background: '#3B3838' } },

  { key: 'a3', style: { background: 'white' } },
  { key: 'b3', style: { background: '#3B3838' } },
  { key: 'c3', style: { background: 'white' } },
  { key: 'd3', style: { background: '#3B3838' } },
  { key: 'e3', style: { background: 'white' } },
  { key: 'f3', style: { background: '#3B3838' } },
  { key: 'g3', style: { background: 'white' } },
  { key: 'h3', style: { background: '#3B3838' } },

  { key: 'a4', style: { background: '#3B3838' } },
  { key: 'b4', style: { background: 'white' } },
  { key: 'c4', style: { background: '#3B3838' } },
  { key: 'd4', style: { background: 'white' } },
  { key: 'e4', style: { background: '#3B3838' } },
  { key: 'f4', style: { background: 'white' } },
  { key: 'g4', style: { background: '#3B3838' } },
  { key: 'h4', style: { background: 'white' } },

  { key: 'a5', style: { background: 'white' } },
  { key: 'b5', style: { background: '#3B3838' } },
  { key: 'c5', style: { background: 'white' } },
  { key: 'd5', style: { background: '#3B3838' } },
  { key: 'e5', style: { background: 'white' } },
  { key: 'f5', style: { background: '#3B3838' } },
  { key: 'g5', style: { background: 'white' } },
  { key: 'h5', style: { background: '#3B3838' } },

  { key: 'a6', style: { background: '#3B3838' } },
  { key: 'b6', style: { background: 'white' } },
  { key: 'c6', style: { background: '#3B3838' } },
  { key: 'd6', style: { background: 'white' } },
  { key: 'e6', style: { background: '#3B3838' } },
  { key: 'f6', style: { background: 'white' } },
  { key: 'g6', style: { background: '#3B3838' } },
  { key: 'h6', style: { background: 'white' } },

  { key: 'a7', style: { background: '#3B3838' } },
  { key: 'b7', style: { background: 'white' } },
  { key: 'c7', style: { background: '#3B3838' } },
  { key: 'd7', style: { background: 'white' } },
  { key: 'e7', style: { background: '#3B3838' } },
  { key: 'f7', style: { background: 'white' } },
  { key: 'g7', style: { background: '#3B3838' } },
  { key: 'h7', style: { background: 'white' } },

  { key: 'a8', style: { background: 'white' } },
  { key: 'b8', style: { background: '#3B3838' } },
  { key: 'c8', style: { background: 'white' } },
  { key: 'd8', style: { background: '#3B3838' } },
  { key: 'e8', style: { background: 'white' } },
  { key: 'f8', style: { background: '#3B3838' } },
  { key: 'g8', style: { background: 'white' } },
  { key: 'h8', style: { background: '#3B3838' } },
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

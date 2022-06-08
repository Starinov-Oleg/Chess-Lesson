import { configureStore } from '@reduxjs/toolkit'

import pieceReducer from './reducer/board-game-pieces-reducer'
import boardGameReducer from './reducer/board-game-reducer'
import contactReducer from './reducer/contact-reducer'
import eventReducer from './reducer/event-reducer'
import authReducer from './slicer/auth-slicer'
import postReducer from './slicer/user-activity-slicer'
//import authReducer from './reducer/auth.reducer'
import itemReducer from './slicer/user-slicer'
export default configureStore({
  reducer: {
    events: eventReducer,
    contacts: contactReducer,
    board: boardGameReducer,
    piece: pieceReducer,
    auth: authReducer,
    users: itemReducer,
    posts: postReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

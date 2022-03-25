import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './reducer/event-reducer'
import contactReducer from './reducer/contact-reducer'
import boardGameReducer from './reducer/board-game-reducer'
import pieceReducer from './reducer/board-game-pieces-reducer'
import usersReducer from './reducer/user.reducer'
import authReducer from './reducer/auth.reducer'
export default configureStore({
  reducer: {
    events: eventReducer,
    contacts: contactReducer,
    board: boardGameReducer,
    piece: pieceReducer,
    usersPage: usersReducer,
    auth: authReducer,
  },
})

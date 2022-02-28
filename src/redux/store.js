import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './reducer/event-reducer'
import contactReducer from './reducer/contact-reducer'
import boardGameReducer from './reducer/board-game-reducer'
import usersReducer from './reducer/user.reducer'
export default configureStore({
  reducer: { events: eventReducer, contacts: contactReducer, board: boardGameReducer, usersPage: usersReducer },
})

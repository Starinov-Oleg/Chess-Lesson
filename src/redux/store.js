import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './reducer/event-reducer'
import contactReducer from './reducer/contact-reducer'

export default configureStore({
  reducer: { events: eventReducer, contacts: contactReducer },
})

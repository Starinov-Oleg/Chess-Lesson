import { configureStore } from '@reduxjs/toolkit'

import contactReducer from './reducer/contact-reducer'
import eventReducer from './reducer/event-reducer'
import authReducer from './slicer/auth-slicer'
import postReducer from './slicer/user-activity-slicer'
import itemReducer from './slicer/user-slicer'
export default configureStore({
  reducer: {
    events: eventReducer,
    contacts: contactReducer,
    auth: authReducer,
    users: itemReducer,
    posts: postReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

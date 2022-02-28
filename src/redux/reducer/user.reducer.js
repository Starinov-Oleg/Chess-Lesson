const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const initialState = {
  users: [
    {
      id: 0,
      fullname: 'Oleg',
      status: 'Couch',
      location: 'city',
      contact: 'contact',
      win: '100',
      lose: '100',
      list_last_win: 'a1,b1',
      list_last_lose: 'a1, b1',
      friends: 'names',
      couches: 'names',
      events: 'events',
      followed: true,
    },
  ],
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users:[...state.users],
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        // users:[...state.users],
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        }),
      }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] }
    }
    default:
      return state
  }
}

export const followAC = userId => ({ type: FOLLOW, userId })
export const unfollowAC = userId => ({ type: UNFOLLOW, userId })
export const setUsersAC = users => ({ type: SET_USERS, users })
export default usersReducer

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const initialState = {
  users: [
    {
      id: 0,
      fullname: 'Oleg',
      position: 'Couch',
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
    {
      id: 1,
      fullname: 'Dung',
      position: 'Friend',
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
  pageSize: 9,
  totalUsersCount: 0,
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

export const follow = userId => ({ type: FOLLOW, userId })
export const unfollow = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export default usersReducer

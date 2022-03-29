const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
/*interface User {
  id: number
  fullname: string
  position: string
  location: string
  contact: string
  win: number
  lose: number
  list_last_win: any
  list_last_lose: any
  friends: any
  couches: any
  events: any
  followed: boolean
  cover: string
  photo: string
}*/
interface InitialUserInterface {
  users: any
  pageSize: number
  totalFriendsCount: number
}

const initialState: InitialUserInterface = {
  users: [
    {
      id: 0,
      fullname: 'Oleg',
      position: 'Couch',
      location: 'city',
      contact: 'contact',
      win: 100,
      lose: 100,
      list_last_win: [1, 2, 3],
      list_last_lose: [1, 2, 3],
      friends: [1, 2, 3],
      couches: [],
      events: [],
      followed: true,
      cover: '/assets/pages/chess-play/user.png',
      photo: '/assets/header-pages/home.png',
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
      cover: 0,
      photo: 0,
    },
  ],
  pageSize: 9,
  totalFriendsCount: 0,
}
const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user: { id: any }) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user: { id: any }) => {
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

export const follow = (userId: any) => ({ type: FOLLOW, userId })
export const unfollow = (userId: any) => ({ type: UNFOLLOW, userId })
export const setUsers = (users: any) => ({ type: SET_USERS, users })
export default usersReducer

/**TODO interface for user item */

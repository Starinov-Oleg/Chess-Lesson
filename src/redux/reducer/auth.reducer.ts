const SET_USER_DATA = 'SET_USER_DATA'

interface InitialInterface {
  id: null | number
  email: null | string
  password: null | any
  isAuth: boolean
}
const initialState: InitialInterface = {
  id: null,
  email: null,
  password: null,
  isAuth: true,
}
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: false,
      }

    default:
      return state
  }
}

export const setUserData = (id: null | number, email: null | string, password: null | any, isAuth: boolean) => ({
  type: SET_USER_DATA,
  data: { id, email, password, isAuth },
})

export default authReducer

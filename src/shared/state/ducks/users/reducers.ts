import { IUsersState, TUsersAction, UsersActionType } from './types'

export const initialState: IUsersState = {
  pending: false,
  data: [],
  errors: null,
}

export const usersReducer = (state: IUsersState = initialState, action: TUsersAction): IUsersState => {
  switch (action.type) {
    case UsersActionType.FETCH_USERS_REQUEST: {
      return { ...state, pending: true }
    }
    case UsersActionType.FETCH_USERS_SUCCESS: {
      return { ...state, pending: false, data: action.payload.data, errors: null }
    }
    case UsersActionType.FETCH_USERS_ERROR: {
      return { ...state, pending: false, data: [], errors: action.payload.error }
    }
    default:
      return state
  }
}

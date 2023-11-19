import {
  FetchUsersErrorPayload,
  FetchUsersRequestPayload,
  FetchUsersSuccessPayload,
  IFetchUsersErrorAction,
  IFetchUsersRequestAction,
  IFetchUsersSuccessAction,
  UsersActionType,
} from './types'

export const fetchUsersRequest = (payload: FetchUsersRequestPayload): IFetchUsersRequestAction => ({
  type: UsersActionType.FETCH_USERS_REQUEST,
  payload,
})
export const fetchUsersSuccess = (payload: FetchUsersSuccessPayload): IFetchUsersSuccessAction => ({
  type: UsersActionType.FETCH_USERS_SUCCESS,
  payload,
})
export const fetchUsersError = (payload: FetchUsersErrorPayload): IFetchUsersErrorAction => ({
  type: UsersActionType.FETCH_USERS_ERROR,
  payload,
})

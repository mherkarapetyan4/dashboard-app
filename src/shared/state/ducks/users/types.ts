import { IUser } from './model'

export interface IUsersState {
  readonly pending: boolean
  readonly data: IUser[]
  readonly errors: string | null
}

interface IUsersRequestParams {
  page?: number
  limit?: number
}

export interface FetchUsersRequestPayload {
  params: IUsersRequestParams
}

export interface FetchUsersSuccessPayload {
  data: IUser[]
}

export interface FetchUsersErrorPayload {
  error: string
}
export interface IFetchUsersRequestAction {
  type: UsersActionType.FETCH_USERS_REQUEST
  payload: FetchUsersRequestPayload
}
export interface IFetchUsersSuccessAction {
  type: UsersActionType.FETCH_USERS_SUCCESS
  payload: FetchUsersSuccessPayload
}

export interface IFetchUsersErrorAction {
  type: UsersActionType.FETCH_USERS_ERROR
  payload: FetchUsersErrorPayload
}

export type TUsersAction = IFetchUsersRequestAction | IFetchUsersSuccessAction | IFetchUsersErrorAction

export enum UsersActionType {
  FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

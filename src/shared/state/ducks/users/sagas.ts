import { all, call, put, takeLatest } from 'redux-saga/effects'

import apiCaller from 'shared/utils/api'

import { fetchUsersError, fetchUsersSuccess } from './actions'
import { IUser } from './model'
import { IFetchUsersRequestAction, UsersActionType } from './types'

const getUsers = (page = 1, limit = 10) => {
  return apiCaller('GET', `/users?_page=${page}&_limit=${limit}`)
}

export const getUserDetails = (id: number) => {
  return apiCaller('GET', `/users/${id}`)
}
//
function* fetchUsersSaga(data: IFetchUsersRequestAction) {
  try {
    const response: IUser[] = yield call(() => getUsers(data.payload.params.page, data.payload.params.limit))

    yield put(fetchUsersSuccess({ data: response }))
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchUsersError({
          error: e.stack!,
        }),
      )
    } else {
      yield put(fetchUsersError({ error: 'Something went wrong' }))
    }
  }
}
function* usersSaga() {
  yield all([takeLatest(UsersActionType.FETCH_USERS_REQUEST, fetchUsersSaga)])
}

export default usersSaga

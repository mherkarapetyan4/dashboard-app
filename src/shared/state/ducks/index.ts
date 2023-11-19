import { combineReducers } from '@reduxjs/toolkit'
import { all, fork } from 'redux-saga/effects'

import { reportsReducer } from './reports/reducers'
import reportsSaga from './reports/sagas'
import { uiReducer } from './ui/reducers'
import { usersReducer } from './users/reducers'
import usersSaga from './users/sagas'

export function* rootSaga() {
  yield all([fork(usersSaga), fork(reportsSaga)])
}

export const rootReducer = combineReducers({ ui: uiReducer, users: usersReducer, reports: reportsReducer })
export type RootState = ReturnType<typeof rootReducer>

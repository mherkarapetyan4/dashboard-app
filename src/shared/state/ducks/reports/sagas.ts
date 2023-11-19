import { all, call, put, takeLatest } from 'redux-saga/effects'

import apiCaller from 'shared/utils/api'

import { fetchReportsError, fetchReportsRequest, fetchReportsSuccess } from './actions'
import { IReport } from './model'
import {
  ICreateReportRequestAction,
  IDeleteReportRequestAction,
  IEditReportRequestAction,
  IFetchReportsRequestAction,
  ReportsActionType,
} from './types'

const getReports = (page = 1, limit = 10, filter = '') => {
  const queryString = filter ? filter : `_page=${page}&_limit=${limit}`
  return apiCaller('GET', `/reports?${queryString}`)
}

const createReport = (data: IReport) => {
  return apiCaller('POST', '/reports', data)
}

const editReport = (data: IReport) => {
  const buffData = { title: data.title, date: data.date, userId: data.userId }
  return apiCaller('PATCH', `/reports/${data.id}`, buffData)
}

const deleteReport = (data: number) => {
  return apiCaller('DELETE', `/reports/${data}`)
}

function* fetchReportsSaga(data: IFetchReportsRequestAction) {
  try {
    const response: IReport[] = yield call(() =>
      getReports(data.payload.params.page, data.payload.params.limit, data.payload.params.filter),
    )

    yield put(fetchReportsSuccess({ data: response }))
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchReportsError({
          error: e.stack!,
        }),
      )
    } else {
      yield put(fetchReportsError({ error: 'Something went wrong' }))
    }
  }
}

function* createReportSaga(data: ICreateReportRequestAction) {
  try {
    const response: IReport = yield call(() => createReport(data.payload.data))

    yield put(fetchReportsRequest({ params: { page: 1, limit: 10 } }))
    yield call(data.cb)
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchReportsError({
          error: e.stack!,
        }),
      )
    } else {
      yield put(fetchReportsError({ error: 'Something went wrong' }))
    }
  }
}

function* deleteReportSaga(data: IDeleteReportRequestAction) {
  try {
    yield call(() => deleteReport(data.payload.id))

    yield put(fetchReportsRequest({ params: { page: 1, limit: 10 } }))
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchReportsError({
          error: e.stack!,
        }),
      )
    } else {
      yield put(fetchReportsError({ error: 'Something went wrong' }))
    }
  }
}

function* editReportSaga(data: IEditReportRequestAction) {
  try {
    const response: IReport = yield call(() => editReport(data.payload.data))
    yield put(fetchReportsRequest({ params: { page: 1, limit: 10 } }))
    yield call(data.cb)
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchReportsError({
          error: e.stack!,
        }),
      )
    } else {
      yield put(fetchReportsError({ error: 'Something went wrong' }))
    }
  }
}

function* reportsSaga() {
  yield all([
    takeLatest(ReportsActionType.FETCH_REPORTS_REQUEST, fetchReportsSaga),
    takeLatest(ReportsActionType.CREATE_REPORT_REQUEST, createReportSaga),
    takeLatest(ReportsActionType.DELETE_REPORT_REQUEST, deleteReportSaga),
    takeLatest(ReportsActionType.EDIT_REPORT_REQUEST, editReportSaga),
  ])
}

export default reportsSaga

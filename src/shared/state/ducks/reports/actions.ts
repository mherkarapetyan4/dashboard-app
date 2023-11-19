import {
  DeleteReportRequestPayload,
  FetchReportsErrorPayload,
  FetchReportsRequestPayload,
  FetchReportsSuccessPayload,
  ICreateReportRequestAction,
  IDeleteReportRequestAction,
  IEditReportRequestAction,
  IFetchReportsErrorAction,
  IFetchReportsRequestAction,
  IFetchReportsSuccessAction,
  ReportRequestPayload,
  ReportsActionType,
} from './types'

export const fetchReportsRequest = (payload: FetchReportsRequestPayload): IFetchReportsRequestAction => ({
  type: ReportsActionType.FETCH_REPORTS_REQUEST,
  payload,
})
export const fetchReportsSuccess = (payload: FetchReportsSuccessPayload): IFetchReportsSuccessAction => ({
  type: ReportsActionType.FETCH_REPORTS_SUCCESS,
  payload,
})
export const fetchReportsError = (payload: FetchReportsErrorPayload): IFetchReportsErrorAction => ({
  type: ReportsActionType.FETCH_REPORTS_ERROR,
  payload,
})

export const createReportRequest = (payload: ReportRequestPayload, cb: () => void): ICreateReportRequestAction => ({
  type: ReportsActionType.CREATE_REPORT_REQUEST,
  payload,
  cb,
})

export const deleteReportRequest = (payload: DeleteReportRequestPayload): IDeleteReportRequestAction => ({
  type: ReportsActionType.DELETE_REPORT_REQUEST,
  payload,
})

export const editReportRequest = (payload: ReportRequestPayload, cb: () => void): IEditReportRequestAction => ({
  type: ReportsActionType.EDIT_REPORT_REQUEST,
  payload,
  cb,
})

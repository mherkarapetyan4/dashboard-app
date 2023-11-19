import { IReport } from './model'

export interface IReportsState {
  readonly pending: boolean
  readonly data: IReport[]
  readonly errors: string | null
}

interface IReportsRequestParams {
  page?: number
  limit?: number
  filter?: string
}

export interface FetchReportsRequestPayload {
  params: IReportsRequestParams
}

export interface FetchReportsSuccessPayload {
  data: IReport[]
}

export interface FetchReportsErrorPayload {
  error: string
}
export interface IFetchReportsRequestAction {
  type: ReportsActionType.FETCH_REPORTS_REQUEST
  payload: FetchReportsRequestPayload
}
export interface IFetchReportsSuccessAction {
  type: ReportsActionType.FETCH_REPORTS_SUCCESS
  payload: FetchReportsSuccessPayload
}

export interface IFetchReportsErrorAction {
  type: ReportsActionType.FETCH_REPORTS_ERROR
  payload: FetchReportsErrorPayload
}

// create report

export interface ReportRequestPayload {
  data: IReport
}

export interface ICreateReportRequestAction {
  type: ReportsActionType.CREATE_REPORT_REQUEST
  payload: ReportRequestPayload
  cb: () => void
}

export interface ICreateReportErrorAction {
  type: ReportsActionType.CREATE_REPORT_ERROR
  payload: FetchReportsErrorPayload
}

// edit

export interface IEditReportRequestAction {
  type: ReportsActionType.EDIT_REPORT_REQUEST
  payload: ReportRequestPayload
  cb: () => void
}

export interface IEditReportErrorAction {
  type: ReportsActionType.EDIT_REPORT_ERROR
  payload: FetchReportsErrorPayload
}

// delete report

export interface DeleteReportRequestPayload {
  id: number
}

export interface IDeleteReportRequestAction {
  type: ReportsActionType.DELETE_REPORT_REQUEST
  payload: DeleteReportRequestPayload
}

export type TReportsAction =
  | IFetchReportsRequestAction
  | IFetchReportsSuccessAction
  | IFetchReportsErrorAction
  | ICreateReportRequestAction
  | ICreateReportErrorAction
  | IDeleteReportRequestAction
  | IEditReportRequestAction
  | IEditReportErrorAction

export enum ReportsActionType {
  FETCH_REPORTS_REQUEST = 'FETCH_REPORTS_REQUEST',
  FETCH_REPORTS_SUCCESS = 'FETCH_REPORTS_SUCCESS',
  FETCH_REPORTS_ERROR = 'FETCH_REPORTS_ERROR',
  CREATE_REPORT_REQUEST = 'CREATE_REPORT_REQUEST',
  CREATE_REPORT_SUCCESS = 'CREATE_REPORT_SUCCESS',
  CREATE_REPORT_ERROR = 'CREATE_REPORT_ERROR',
  DELETE_REPORT_REQUEST = 'DELETE_REPORT_REQUEST',

  EDIT_REPORT_REQUEST = 'EDIT_REPORT_REQUEST',
  EDIT_REPORT_ERROR = 'EDIT_REPORT_ERROR',
}

import { IReportsState, ReportsActionType, TReportsAction } from './types'

export const initialState: IReportsState = {
  pending: false,
  data: [],
  errors: null,
}

export const reportsReducer = (state: IReportsState = initialState, action: TReportsAction): IReportsState => {
  switch (action.type) {
    case ReportsActionType.FETCH_REPORTS_REQUEST:
    case ReportsActionType.CREATE_REPORT_REQUEST:
    case ReportsActionType.DELETE_REPORT_REQUEST:
    case ReportsActionType.EDIT_REPORT_REQUEST: {
      return { ...state, pending: true }
    }
    case ReportsActionType.FETCH_REPORTS_SUCCESS: {
      return { ...state, pending: false, data: action.payload.data, errors: null }
    }
    case ReportsActionType.FETCH_REPORTS_ERROR:
    case ReportsActionType.CREATE_REPORT_ERROR:
    case ReportsActionType.EDIT_REPORT_ERROR: {
      return { ...state, pending: false, errors: action.payload.error }
    }
    default:
      return state
  }
}

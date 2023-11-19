import { IUIState, TUIAction, UIActionType } from './types'

export const initialState: IUIState = {
  isMenuOpen: true,
  errors: [],
}

export const uiReducer = (state: IUIState = initialState, action: TUIAction): IUIState => {
  switch (action.type) {
    case UIActionType.TOGGLE_IS_OPEN: {
      return { ...state, isMenuOpen: !state.isMenuOpen }
    }
    default:
      return state
  }
}

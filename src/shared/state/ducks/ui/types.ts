export interface IUIState {
  readonly isMenuOpen: boolean
  readonly errors: []
}

export interface IToggleIsOpenAction {
  type: UIActionType.TOGGLE_IS_OPEN
}

export type TUIAction = IToggleIsOpenAction

export enum UIActionType {
  TOGGLE_IS_OPEN = 'TOGGLE_IS_OPEN',
}

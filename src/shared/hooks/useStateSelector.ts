import { useSelector as useReduxSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import { RootState } from '../state/ducks'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

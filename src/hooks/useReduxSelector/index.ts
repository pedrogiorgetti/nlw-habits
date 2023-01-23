import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { ReduxStore } from '../../store/types'

export const useReduxSelector: TypedUseSelectorHook<ReduxStore> = useSelector
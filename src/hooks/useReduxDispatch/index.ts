import type { AppDispatch } from "../../store/types"
import { useDispatch } from 'react-redux';

export const useReduxDispatch = () => useDispatch<AppDispatch>()
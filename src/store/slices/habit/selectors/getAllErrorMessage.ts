
import { ReduxStore } from '../../../types';

export function getAllErrorMessage(state: ReduxStore): string {
  return state.habit.getAll.config.errorMessage;
}
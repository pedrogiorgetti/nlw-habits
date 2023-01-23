
import { ReduxStore } from '../../../types';

export function getAllEmptyMessage(state: ReduxStore): string {
  return state.habit.getAll.config.emptyMessage;
}
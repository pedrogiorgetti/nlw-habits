
import { ReduxStore } from '../../../types';

export function getAllByDayEmptyMessage(state: ReduxStore): string {
  return state.habit.getAllByDay.config.emptyMessage;
}
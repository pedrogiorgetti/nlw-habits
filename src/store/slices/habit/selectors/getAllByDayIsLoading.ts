
import { ReduxStore } from '../../../types';

export function getAllByDayIsLoading(state: ReduxStore): boolean {
  return state.habit.getAllByDay.config.isLoading;
}
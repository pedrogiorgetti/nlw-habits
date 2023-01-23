
import { ReduxStore } from '../../../types';

export function toggleIsLoading(state: ReduxStore): boolean {
  return state.habit.toggle.config.isLoading;
}
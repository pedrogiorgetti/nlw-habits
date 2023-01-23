
import { ReduxStore } from '../../../types';

export function createIsLoading(state: ReduxStore): boolean {
  return state.habit.create.config.isLoading;
}
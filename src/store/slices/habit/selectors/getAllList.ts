
import { ReduxStore } from '../../../types';
import { ISummary } from '../index';

export function getAllList(state: ReduxStore): ISummary[] {
  return state.habit.getAll.list;
}

import { IGetAllByDayHabitList } from '../index';
import { ReduxStore } from '../../../types';

export function getAllByDayList(state: ReduxStore): IGetAllByDayHabitList {
  return state.habit.getAllByDay.list;
}
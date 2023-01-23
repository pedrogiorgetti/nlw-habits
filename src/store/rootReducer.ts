import { habitReducers, IHabitState } from "./slices/habit"

export interface IApplicationState {
  habit: IHabitState;
}

export const rootReducers = {
  habit: habitReducers,
}
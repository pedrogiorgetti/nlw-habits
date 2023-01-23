import { Draft, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { IHabitState } from "../../index";


interface IToggleHabitSuccessAction {
  habitId: string;
}

export function toggleSuccess(
  draft: Draft<IHabitState>,
  action: PayloadAction<IToggleHabitSuccessAction>
) {
  draft.toggle.config.isLoading = false;

  const isHabitAlreadyCompleted = draft.getAllByDay.list.completedHabits.includes(action.payload.habitId);
  if (isHabitAlreadyCompleted) {
    draft.getAllByDay.list.completedHabits = 
    draft.getAllByDay.list.completedHabits.filter(completedHabit => 
      completedHabit !== action.payload.habitId
    )
    draft.getAll.list = draft.getAll.list.map(habit => {
      const isToday = dayjs(habit.date).isSame(new Date(), 'day');
      if (isToday) {
        return {
          ...habit,
          completed: habit.completed ? habit.completed -1 : undefined,
        }
      }
      return habit
    })
  } else {
    draft.getAllByDay.list.completedHabits = [
      ...draft.getAllByDay.list.completedHabits,
      action.payload.habitId
    ]
    draft.getAll.list = draft.getAll.list.map(habit => {
      const isToday = dayjs(habit.date).isSame(new Date(), 'day');
      if (isToday) {
        return {
          ...habit,
          completed: habit.completed ? habit.completed + 1 : 1
        }
      }
      return habit
    })
  }
}
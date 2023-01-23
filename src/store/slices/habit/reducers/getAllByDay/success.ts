import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { IHabitState } from "../../index";

export interface IGetAllByDaySuccessAction {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[];
  completedHabits: string[];
}

export function getAllByDaySuccess(
  draft: Draft<IHabitState>,
  action: PayloadAction<IGetAllByDaySuccessAction>
) {
  draft.getAllByDay.config.isLoading = false;
  draft.getAllByDay.list.completedHabits = action.payload.completedHabits;
  draft.getAllByDay.list.possibleHabits = action.payload.possibleHabits;
}
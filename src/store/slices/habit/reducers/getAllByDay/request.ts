import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { IHabitState } from "../../index";

export interface IGetAllByDayRequestAction {
  date: string;
}

export function getAllByDayRequest(
  draft: Draft<IHabitState>,
  _: PayloadAction<IGetAllByDayRequestAction>
) {
  draft.getAllByDay.config.isLoading = true;
}
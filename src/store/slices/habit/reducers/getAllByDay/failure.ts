import { Draft } from "@reduxjs/toolkit";
import { IHabitState } from "../../index";

export function getAllByDayFailure(draft: Draft<IHabitState>) {
  draft.getAllByDay.config.isLoading = false;
}
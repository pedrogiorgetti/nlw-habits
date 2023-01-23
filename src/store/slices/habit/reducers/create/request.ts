import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { IHabitState } from "../../index";

export interface ICreateHabitRequestAction {
  title: string;
  weekDays: number[];
}

export function createRequest(
  draft: Draft<IHabitState>,
  _: PayloadAction<ICreateHabitRequestAction>
) {
  draft.create.config.isLoading = true
}
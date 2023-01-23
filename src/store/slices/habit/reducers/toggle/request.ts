import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { IHabitState } from "../../index";

export interface IToggleHabitRequestAction {
  habitId: string;
}

export function toggleRequest(
  draft: Draft<IHabitState>,
  _: PayloadAction<IToggleHabitRequestAction>
) {
  draft.toggle.config.isLoading = true;
}
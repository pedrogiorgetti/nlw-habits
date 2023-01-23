import { Draft } from "@reduxjs/toolkit";
import { IHabitState } from "../../index";

export function toggleFailure(draft: Draft<IHabitState>) {
  draft.toggle.config.isLoading = false;
}
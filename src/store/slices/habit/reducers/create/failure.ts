import { Draft } from "@reduxjs/toolkit";
import { IHabitState } from "../../index";

export function createFailure(draft: Draft<IHabitState>) {
  draft.create.config.isLoading = false;
}
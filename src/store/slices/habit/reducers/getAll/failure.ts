import { Draft } from "@reduxjs/toolkit";
import { IHabitState } from "../../index";



export function getAllFailure(draft: Draft<IHabitState>) {
  draft.getAll.config.errorMessage = "Sorry, it's not possible to show your habits";
}
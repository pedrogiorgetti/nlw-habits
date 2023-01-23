import { Draft } from "@reduxjs/toolkit";
import { IHabitState } from "../../index";


export function getAllRequest(draft: Draft<IHabitState>) {
  draft.getAll.list = [];
}
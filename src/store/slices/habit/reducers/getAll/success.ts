import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { IHabitState } from "../../index";

interface IGetAllSuccessAction {
  list: {
    amount?: number;
    completed?: number;
    id: string;
    date: Date;
  }[];
}

export function getAllSuccess(
  draft: Draft<IHabitState>,
  action: PayloadAction<IGetAllSuccessAction>
) {
  draft.getAll.list = action.payload.list;
}

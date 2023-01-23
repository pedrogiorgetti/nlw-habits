import { call, put } from "redux-saga/effects";
import { habitActions } from "../index";
import { httpClient } from "../../../../services/httpClient";
import { PayloadAction } from "@reduxjs/toolkit";
import { IToggleHabitRequestAction } from "../reducers/toggle/request";

export function* toggle(action: PayloadAction<IToggleHabitRequestAction>) {
  try {
    yield call(
      httpClient.patch,
      `habits/${action.payload.habitId}/toggle`
    );
    
    yield put(habitActions.toggleSuccess({
      habitId: action.payload.habitId,
    }))
  } catch (err: any) {
    yield put(habitActions.toggleFailure())
  }
}
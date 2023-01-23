import { call, put } from "redux-saga/effects";
import { habitActions } from "../index";
import { httpClient } from "../../../../services/httpClient";
import { PayloadAction } from "@reduxjs/toolkit";
import { ICreateHabitRequestAction } from "../reducers/create/request";

export function* create(action: PayloadAction<ICreateHabitRequestAction>) {
  try {
    const body = {
      title: action.payload.title,
      weekDays: action.payload.weekDays,
    }

    yield call(
      httpClient.post,
      'habits',
      body
    );
    
    yield put( habitActions.createSuccess())
  } catch (err: any) {
    yield put( habitActions.createFailure())
  }
}
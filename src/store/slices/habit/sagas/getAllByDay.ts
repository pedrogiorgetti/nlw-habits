import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { habitActions } from "../index";
import { httpClient } from "../../../../services/httpClient";
import { IGetAllByDayRequestAction } from "../reducers/getAllByDay/request";
import { IGetAllByDaySuccessAction } from "../reducers/getAllByDay/success";

export function* getAllByDay(action: PayloadAction<IGetAllByDayRequestAction>) {
  try {
    const params = {
      date: action.payload.date,
    };
 
    const response: AxiosResponse<IGetAllByDaySuccessAction> = yield call(
      httpClient.get,
      'day',
      { params }
    );

    yield put(habitActions.getAllByDaySuccess({
      completedHabits: response.data.completedHabits || [],
      possibleHabits: response.data.possibleHabits,
    }))


  } catch (err: any) {
    yield put(habitActions.getAllByDayFailure());
  }
}
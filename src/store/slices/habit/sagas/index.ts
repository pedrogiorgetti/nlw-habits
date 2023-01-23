import { all, takeLatest } from "redux-saga/effects";
import { habitActions } from "../index";
import { create } from "./create";
import { getAll } from "./getAll";
import { getAllByDay } from "./getAllByDay";
import { toggle } from "./toggle";

export const habitSagas = all([
  takeLatest(habitActions.createRequest, create),
  takeLatest(habitActions.getAllRequest, getAll),
  takeLatest(habitActions.getAllByDayRequest, getAllByDay),
  takeLatest(habitActions.toggleRequest, toggle),
])
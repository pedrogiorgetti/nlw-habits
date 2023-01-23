import { createFailure } from "./create/failure";
import { createRequest } from "./create/request";
import { createSuccess } from "./create/success";
import { getAllFailure } from "./getAll/failure";
import { getAllRequest } from "./getAll/request";
import { getAllSuccess } from "./getAll/success";
import { getAllByDayFailure } from "./getAllByDay/failure";
import { getAllByDayRequest } from "./getAllByDay/request";
import { getAllByDaySuccess } from "./getAllByDay/success";
import { toggleFailure } from "./toggle/failure";
import { toggleRequest } from "./toggle/request";
import { toggleSuccess } from "./toggle/success";

export const reducers = {
  createFailure,
  createRequest,
  createSuccess,
  getAllFailure,
  getAllRequest,
  getAllSuccess,
  getAllByDayFailure,
  getAllByDayRequest,
  getAllByDaySuccess,
  toggleFailure,
  toggleRequest,
  toggleSuccess,
}
import { createIsLoading } from "./createIsLoading";
import { getAllEmptyMessage } from "./getAllEmptyMessage";
import { getAllErrorMessage } from "./getAllErrorMessage";
import { getAllList } from "./getAllList";
import { getAllByDayEmptyMessage } from "./getAllByDayEmptyMessage";
import { getAllByDayIsLoading } from "./getAllByDayIsLoading";
import { getAllByDayList } from "./getAllByDayList";
import { toggleIsLoading } from "./toggleIsLoading";

export const habitSelectors = {
  createIsLoading,
  getAllList,
  getAllErrorMessage,
  getAllEmptyMessage,
  getAllByDayEmptyMessage,
  getAllByDayIsLoading,
  getAllByDayList,
  toggleIsLoading,
}
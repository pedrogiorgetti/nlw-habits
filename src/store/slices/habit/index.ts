import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";

export interface ISummary {
  amount?: number;
  date: Date;
  id: string;
  completed?: number;
}

export interface IGetAllByDayHabitList {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[];
  completedHabits: string[];
}

export interface IHabitState {
  create: {
    config: {
      isLoading: boolean;
    }
  };
  getAll: {
    list: ISummary[];
    config: {
      errorMessage: string;
      emptyMessage: string;
    }
  }
  getAllByDay: {
    list: IGetAllByDayHabitList;
    config: {
      emptyMessage: string;
      isLoading: boolean;
    }
  };
  toggle: {
    config: {
      isLoading: boolean;
    }
  }
}

const initialState: IHabitState = {
  create: {
    config: {
      isLoading: false,
    }
  },
  getAll: {
    list: [],
    config: {
      errorMessage: '',
      emptyMessage: "Any habits to show",
    }
  },
  getAllByDay: {
    config: {
      emptyMessage: "You don't have any habits in this day",
      isLoading: false,
    },
    list: {
      completedHabits: [],
      possibleHabits: [],
    }
  },
  toggle: {
    config: {
      isLoading: false,
    }
  }
}

const habitSlice = createSlice({
  name: '@habit',
  initialState,
  reducers, 
})


export const habitActions = habitSlice.actions;
export const habitReducers = habitSlice.reducer;
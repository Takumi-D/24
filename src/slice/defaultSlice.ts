import { createSlice } from "@reduxjs/toolkit";
import api from "../api/state";
import Api from "../type/store";

export interface State {
  data: Array<Api>;
}

const initialState: State = {
  data: null,
};

const defaultSlice = createSlice({
  name: "default",
  initialState,
  reducers: {
    receiving: (state: State) => {
      state.data = api;
    },
    openHighcharts: (state, action) => {
      const id = state.data.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.data.forEach((item) => {
        item.highcharts = false;
      });
      if (!action.payload.highcharts) {
        state.data[id].highcharts = true;
      }
    },
  },
});

export const { receiving, openHighcharts } = defaultSlice.actions;
export default defaultSlice.reducer;

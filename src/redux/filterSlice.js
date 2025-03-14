import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number:"",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    changeFilter(state, action) {
      state.number = action.payload;
    },
  },
});


export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = state => state.filters.name;
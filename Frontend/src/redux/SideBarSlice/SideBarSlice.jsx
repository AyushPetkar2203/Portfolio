import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBar: false,
};

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.sideBar = !state.sideBar;
    },
  },
});

export const { toggleSideBar } = sideBarSlice.actions;
export const getSideBar = (state) => state.sidebar.sideBar;
export default sideBarSlice.reducer;

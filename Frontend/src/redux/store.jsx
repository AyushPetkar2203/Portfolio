import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./SideBarSlice/SideBarSlice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

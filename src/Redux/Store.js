import { configureStore } from "@reduxjs/toolkit";
import ReasonReducer from "./Slices/ReasonSlice";

export const store = configureStore({
  reducer: {
    ReasonSlice: ReasonReducer,
  },
});

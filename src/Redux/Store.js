import { configureStore } from "@reduxjs/toolkit";
import swotReasonReducer from "./Slices/SwotReasonSlice";

export const store = configureStore({
  reducer: {
    SwotReasonSlice: swotReasonReducer,
  },
});

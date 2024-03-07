import { configureStore } from "@reduxjs/toolkit";
import swotReasonReducer from "../Redux/Slices/SelectionReasonSlice";

export const store = configureStore({
  reducer: {
    SwotReasonSlice: swotReasonReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import ReasonReducer from "./Slices/ReasonSlice";
import ProductReducer from "./Slices/ProductSlice"

export const store = configureStore({
  reducer: {
    ReasonSlice: ReasonReducer,
    ProductSlice:ProductReducer,
  },
});

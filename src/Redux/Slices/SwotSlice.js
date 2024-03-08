import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  strength: ["strength"],
  weakness: ["weakness"],
  opportunity: ["opportunity"],
  threat: ["threat"],
};

const SwotSlice = createSlice({
  name: "SwotSlice",
  initialState: initialState,
  reducers: {
    setSwot:(state,action)=>{

    },
  },
});

export const { setSwot } = SwotSlice.actions;
export default SwotSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { status: false, name: "Availability" },
  { status: false, name: "Interest" },
  { status: false, name: "Demand" },
  { status: false, name: "Knowledge" },
];

const SwotReasonSlice = createSlice({
  name: "SwotReasonSlice",
  initialState: initialState,
  reducers: {
    changeReason: (state, action) => {
      state[action.payload.index] = {
        ...state[action.payload.index],
        status: !state[action.payload.index].status,
      };
    },
  },
});

export const { changeReason } = SwotReasonSlice.actions;
export default SwotReasonSlice.reducer;

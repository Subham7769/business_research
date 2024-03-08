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
      const { index } = action.payload;
      if (index >= 0 && index < state.length) {
        return state.map((reason, i) => {
          if (i === index) {
            return {
              ...reason,
              status: !reason.status,
            };
          }
          return reason;
        });
      }
      return state; // No changes if index is invalid
    },
  },
});

export const { changeReason } = SwotReasonSlice.actions;
export default SwotReasonSlice.reducer;


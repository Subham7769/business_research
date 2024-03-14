import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { status: false, name: "Availability", color:"var(--green)" },
  { status: false, name: "Interest", color:"var(--red)" },
  { status: false, name: "Demand", color:"var(--blue)" },
  { status: false, name: "Knowledge", color:"var(--yellow)" },
];

const ReasonSlice = createSlice({
  name: "ReasonSlice",
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
    resetInitialState: (state) => {
      return initialState;
    },
  },
});

export const { changeReason, resetInitialState } = ReasonSlice.actions;
export default ReasonSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

export interface GamificationState {
  enabled: boolean;
}

const initialState: GamificationState = {
  enabled: false,
};

const gamificationSlice = createSlice({
  name: "gamification",
  initialState,
  reducers: {
    enableGamification: (state) => {
      state.enabled = true;
    },
  },
});

export const { enableGamification } = gamificationSlice.actions;
export default gamificationSlice.reducer;
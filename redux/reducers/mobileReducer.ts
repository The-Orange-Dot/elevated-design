import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface MobileState {
  value: boolean;
}

const initialState: MobileState = {
  value: false,
};

export const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    setMonitor: (state) => {
      state.value = false;
    },
    setMobile: (state) => {
      state.value = true;
    },
  },
});

export const { setMonitor, setMobile } = mobileSlice.actions;

export const mobile = (state: RootState) => state.mobile.value;

export default mobileSlice.reducer;

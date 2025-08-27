import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState: {
    toggle: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.toggle = !state.toggle;
    },
    sideBarCollapse: (state) => {
      state.toggle = false;
    },
  },
});
export const { toggleSideBar, sideBarCollapse } = toggleSlice.actions;
export default toggleSlice.reducer;

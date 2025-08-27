import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    video: [],
  },
  reducers: {
    addListVideos: (state, action) => {
      state.video = action.payload;
    },
  },
});
export const { addListVideos } = videoSlice.actions;
export default videoSlice.reducer;

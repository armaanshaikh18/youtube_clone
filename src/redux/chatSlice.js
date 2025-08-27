import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../assets/constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addLiveMessage: (state, action) => {
      state.message.splice(LIVE_CHAT_COUNT, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addLiveMessage } = chatSlice.actions;
export default chatSlice.reducer;

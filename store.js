import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./src/redux/toogleSlice";
import searchSlice from "./src/redux/searchSlice";
import chatSlice from "./src/redux/chatSlice";
import videoSlice from "./src/redux/videoSlice";

const store = configureStore({
  reducer: {
    cardVideos: videoSlice,
    app: toggleSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;

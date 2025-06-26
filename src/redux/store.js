import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/authSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;

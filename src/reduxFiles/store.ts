import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import jobReducer from "./jobSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

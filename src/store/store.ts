import { configureStore } from "@reduxjs/toolkit";
import { skipsApi } from "./api";

export const store = configureStore({
  reducer: {
    [skipsApi.reducerPath]: skipsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skipsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

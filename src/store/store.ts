import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice/apiSlice";
import { simulatorReducer } from "./simulatorSlice";

export const store = configureStore({

    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        simulator: simulatorReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
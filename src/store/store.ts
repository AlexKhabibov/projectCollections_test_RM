import { configureStore } from "@reduxjs/toolkit";

import { simulatorReducer } from "./simulatorSlice";
import { loadSimulatorState } from "./loadSimulatorState";
import { apiSlice } from "../api/apiSlice/apiSlice";

const STORAGE_KEY = "simulator";

const savedSimulatorState =
    loadSimulatorState();

export const store = configureStore({

    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        simulator: simulatorReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            apiSlice.middleware
        ),

    ...(savedSimulatorState
        ? {
            preloadedState: {
                simulator: savedSimulatorState,
            },
        }
        : {}),
});

store.subscribe(() => {

    try {

        const state = store.getState();

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state.simulator)
        );

    } catch (error) {

        console.error(
            "Не удалось сохранить прогресс тренажера:",
            error
        );
    }
});

export type RootState =
    ReturnType<typeof store.getState>;

export type AppDispatch =
    typeof store.dispatch;
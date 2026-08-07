import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SimulatorResponse } from "../types/types";

interface SimulatorState {
    quiz: SimulatorResponse | null;
    currentQuestionIndex: number;
    isFinished: boolean;
}

const initialState: SimulatorState = {
    quiz: null,
    currentQuestionIndex: 0,
    isFinished: false,
};

const simulatorSlice = createSlice({

    name: "simulator",
    initialState,
    reducers: {

        setQuiz: (
            state,
            action: PayloadAction<SimulatorResponse>
        ) => {
            state.quiz = action.payload;
            state.currentQuestionIndex = 0;
            state.isFinished = false;
        },

        previousQuestion: (state) => {

            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex--;
            }

        },

        nextQuestion: (state) => {

            if (!state.quiz) return;

            if (
                state.currentQuestionIndex <
                state.quiz.questions.length - 1
            ) {
                state.currentQuestionIndex++;
            } else {

                state.isFinished = true;
            }
        },

        resetQuiz: (state) => {
            state.quiz = null;
            state.currentQuestionIndex = 0;
            state.isFinished = false;
        },
    },
});

export const {
    setQuiz,
    previousQuestion,
    nextQuestion,
    resetQuiz,
} = simulatorSlice.actions;

export const simulatorReducer = simulatorSlice.reducer;
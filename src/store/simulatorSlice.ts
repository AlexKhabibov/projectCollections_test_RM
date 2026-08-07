import {
    createSlice,
    type PayloadAction,
} from "@reduxjs/toolkit";

import type {
    SimulatorAnswer,
    SimulatorResponse,
} from "../types/types";

interface SimulatorState {
    quiz: SimulatorResponse | null;
    currentQuestionIndex: number;
    isFinished: boolean;
    answers: SimulatorAnswer[];
}

const initialState: SimulatorState = {
    quiz: null,
    currentQuestionIndex: 0,
    isFinished: false,
    answers: [],
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
            state.answers = [];
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

        previousQuestion: (state) => {

            if (
                state.currentQuestionIndex > 0
            ) {
                state.currentQuestionIndex--;
            }
        },

        answerQuestion: (
            state,
            action: PayloadAction<SimulatorAnswer>
        ) => {

            const existingAnswerIndex =
                state.answers.findIndex(
                    (answer) =>
                        answer.questionId ===
                        action.payload.questionId
                );

            if (
                existingAnswerIndex !== -1
            ) {

                state.answers[
                    existingAnswerIndex
                ] = action.payload;

            } else {

                state.answers.push(
                    action.payload
                );
            }
        },

        resetQuiz: (state) => {

            state.quiz = null;
            state.currentQuestionIndex = 0;
            state.isFinished = false;
            state.answers = [];
        },
    },
});

export const {
    setQuiz,
    nextQuestion,
    previousQuestion,
    answerQuestion,
    resetQuiz,
} = simulatorSlice.actions;

export const simulatorReducer =
    simulatorSlice.reducer;
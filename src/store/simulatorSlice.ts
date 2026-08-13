import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SimulatorAnswer, SimulatorQuestionMode, SimulatorResponse } from "../types/types";

export interface SimulatorState {
    quiz: SimulatorResponse | null;
    currentQuestionIndex: number;
    isFinished: boolean;
    answers: SimulatorAnswer[];
    questionMode: SimulatorQuestionMode | null;
    
}

const initialState: SimulatorState = {
    quiz: null,
    currentQuestionIndex: 0,
    isFinished: false,
    answers: [],
    questionMode: null,
};

interface SetQuizPayload {
    quiz: SimulatorResponse;
    questionMode: SimulatorQuestionMode;
}

const simulatorSlice = createSlice({

    name: "simulator",
    initialState,
    reducers: {

        setQuiz: (
            state,
            action: PayloadAction<SetQuizPayload>
        ) => {

            state.quiz = action.payload.quiz;
            state.questionMode = action.payload.questionMode;
            state.currentQuestionIndex = 0;
            state.isFinished = false;
            state.answers = [];
        },

        answerQuestion: (
            state,
            action: PayloadAction<SimulatorAnswer>
        ) => {

            const existingIndex =
                state.answers.findIndex(
                    (answer) =>
                        answer.questionId ===
                        action.payload.questionId
                );

            if (existingIndex !== -1) {

                state.answers[existingIndex] =
                    action.payload;

            } else {

                state.answers.push(
                    action.payload
                );
            }
        },

        nextQuestion: (state) => {

            if (!state.quiz) {
                return;
            }

            const lastQuestionIndex =
                state.quiz.questions.length - 1;

            if (
                state.currentQuestionIndex <
                lastQuestionIndex
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

        finishQuiz: (state) => {

            state.isFinished = true;
        },

        resetQuiz: (state) => {

            state.quiz = null;
            state.currentQuestionIndex = 0;
            state.isFinished = false;
            state.answers = [];
            state.questionMode = null;
        },
    },
});

export const {
    setQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    finishQuiz,
    resetQuiz,
} = simulatorSlice.actions;

export const simulatorReducer = simulatorSlice.reducer;
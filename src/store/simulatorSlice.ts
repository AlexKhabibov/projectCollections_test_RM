import {
    createSlice,
    type PayloadAction,
} from "@reduxjs/toolkit";

import type {
    Question,
    SimulatorAnswer,
    SimulatorQuestionMode,
    SimulatorResponse,
} from "../types/types";

import { filterSimulatorQuestions } from "../utils/filterSimulatorQuestions";

export interface SimulatorState {
    quiz: SimulatorResponse | null;
    sessionQuestions: Question[];
    currentQuestionIndex: number;
    isFinished: boolean;
    answers: SimulatorAnswer[];
    questionMode:
    SimulatorQuestionMode | null;
    studiedQuestionIds: number[];
}

const initialState: SimulatorState = {
    quiz: null,
    sessionQuestions: [],
    currentQuestionIndex: 0,
    isFinished: false,
    answers: [],
    questionMode: null,
    studiedQuestionIds: [],
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

            const {
                quiz,
                questionMode,
            } = action.payload;

            state.quiz = quiz;
            state.questionMode = questionMode;

            state.sessionQuestions =
                filterSimulatorQuestions(
                    quiz.questions,
                    questionMode,
                    state.studiedQuestionIds
                );

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

            if (
                !state.studiedQuestionIds.includes(
                    action.payload.questionId
                )
            ) {

                state.studiedQuestionIds.push(
                    action.payload.questionId
                );
            }
        },

        nextQuestion: (state) => {

            const lastQuestionIndex =
                state.sessionQuestions.length - 1;

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
            state.sessionQuestions = [];
            state.currentQuestionIndex = 0;
            state.isFinished = false;
            state.answers = [];
            state.questionMode = null;

            // studiedQuestionIds НЕ очищаем.
            // Это история изученных вопросов.
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

export const simulatorReducer =
    simulatorSlice.reducer;
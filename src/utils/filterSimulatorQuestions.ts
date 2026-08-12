import type { Question, SimulatorAnswer, SimulatorQuestionMode } from "../types/types";

export function filterSimulatorQuestions(
    questions: Question[],
    mode: SimulatorQuestionMode,
    answers: SimulatorAnswer[]
): Question[] {

    const answeredQuestionIds = new Set(
        answers.map(
            (answer) => answer.questionId
        )
    );

    switch (mode) {

        case "new":
            return questions.filter(
                (question) =>
                    !answeredQuestionIds.has(
                        Number(question.id)
                    )
            );

        case "review":
            return questions.filter(
                (question) =>
                    answeredQuestionIds.has(
                        Number(question.id)
                    )
            );

        case "random":
            return [...questions].sort(
                () => Math.random() - 0.5
            );

        default:
            return questions;
    }
}
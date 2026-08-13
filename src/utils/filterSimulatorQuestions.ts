import type {
    Question,
    SimulatorQuestionMode,
} from "../types/types";

export function filterSimulatorQuestions(
    questions: Question[],
    mode: SimulatorQuestionMode,
    studiedQuestionIds: number[]
): Question[] {

    const studiedIds =
        new Set(studiedQuestionIds);

    switch (mode) {

        case "new":
            return questions.filter(
                (question) =>
                    !studiedIds.has(
                        Number(question.id)
                    )
            );

        case "review":
            return questions.filter(
                (question) =>
                    studiedIds.has(
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
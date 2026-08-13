import type { SimulatorState } from "./simulatorSlice";

const STORAGE_KEY = "simulator";

export function loadSimulatorState():
    SimulatorState | undefined {

    try {
        const serializedState =
            localStorage.getItem(STORAGE_KEY);

        if (!serializedState) {
            return undefined;
        }

        const parsedState =
            JSON.parse(serializedState);

        return {
            ...parsedState,

            studiedQuestionIds:
                parsedState.studiedQuestionIds ?? [],

        } as SimulatorState;

    } catch (error) {

        console.error(
            "Не удалось восстановить прогресс тренажера:",
            error
        );

        return undefined;
    }
}
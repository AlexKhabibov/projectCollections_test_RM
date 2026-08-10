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

        return JSON.parse(
            serializedState
        ) as SimulatorState;

    } catch (error) {

        console.error(
            "Не удалось восстановить прогресс тренажера:",
            error
        );

        return undefined;
    }
}
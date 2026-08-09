import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../store/store";
import SimulatorResult from "../../components/Simulator/SimulatorResult/SimulatorResult";

function SimulatorResultPage() {

    const quiz = useSelector(
        (state: RootState) => state.simulator.quiz
    );

    if (!quiz) {
        return (
            <Navigate
                to="/simulator"
                replace
            />
        );
    }

    return (
        <SimulatorResult />
    );
}

export default SimulatorResultPage;
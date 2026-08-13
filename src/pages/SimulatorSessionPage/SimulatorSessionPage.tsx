import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../store/store";
import SimulatorSession
    from "../../components/Simulator/SimulatorSession/SimulatorSession";
import SimulatorResult
    from "../../components/Simulator/SimulatorResult/SimulatorResult";

function SimulatorSessionPage() {

    const {
        sessionQuestions,
        currentQuestionIndex,
        isFinished,
    } = useSelector(
        (state: RootState) =>
            state.simulator
    );

    if (isFinished) {
        return <SimulatorResult />;
    }

    if (sessionQuestions.length === 0) {
        return (
            <Navigate
                to="/simulator"
                replace
            />
        );
    }

    const question =
        sessionQuestions[
        currentQuestionIndex
        ];

    if (!question) {
        return (
            <Navigate
                to="/simulator"
                replace
            />
        );
    }

    const isFirst =
        currentQuestionIndex === 0;

    const isLast =
        currentQuestionIndex ===
        sessionQuestions.length - 1;

    return (
        <SimulatorSession
            question={question}
            currentQuestion={
                currentQuestionIndex + 1
            }
            totalQuestions={
                sessionQuestions.length
            }
            isFirst={isFirst}
            isLast={isLast}
        />
    );
}

export default SimulatorSessionPage;
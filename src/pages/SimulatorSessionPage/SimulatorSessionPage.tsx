import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../store/store";

import SimulatorSession
    from "../../components/Simulator/SimulatorSession/SimulatorSession";

function SimulatorSessionPage() {

    const {
        quiz,
        currentQuestionIndex,
    } = useSelector(
        (state: RootState) => state.simulator
    );

    if (!quiz) {
        return (
            <Navigate
                to="/simulator"
                replace
            />
        );
    }

    const question =
        quiz.questions[currentQuestionIndex];

    const isFirst =
        currentQuestionIndex === 0;

    const isLast =
        currentQuestionIndex ===
        quiz.questions.length - 1;

    return (
        <SimulatorSession
            question={question}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={quiz.questions.length}
            isFirst={isFirst}
            isLast={isLast}
        />
    );
}

export default SimulatorSessionPage;
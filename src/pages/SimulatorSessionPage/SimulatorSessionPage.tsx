import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

import SimulatorSession
    from "../../components/Simulator/SimulatorSession/SimulatorSession";

import SimulatorResult
    from "../../components/Simulator/SimulatorResult/SimulatorResult";

function SimulatorSessionPage() {

    const {
        quiz,
        currentQuestionIndex,
        isFinished,
    } = useSelector(
        (state: RootState) => state.simulator
    );

    if (!quiz) {
        return <h2>Тест не найден</h2>;
    }

    if (isFinished) {
        return <SimulatorResult />;
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
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import SimulatorSession from "../../components/Simulator/SimulatorSession/SimulatorSession";

function SimulatorSessionPage() {

    const {
        quiz,
        currentQuestionIndex,
    } = useSelector(
        (state: RootState) => state.simulator
    );

    if (!quiz) {
        return <h2>Тест не найден</h2>;
    }

    const question =
        quiz.questions[currentQuestionIndex];

    return (
        <SimulatorSession
            question={question}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={quiz.questions.length}
            isFirst={currentQuestionIndex === 0}
            isLast={
                currentQuestionIndex ===
                quiz.questions.length - 1
            }
        />
    );
}

export default SimulatorSessionPage;
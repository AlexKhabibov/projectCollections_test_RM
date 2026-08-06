import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

function SimulatorSessionPage() {

    const quiz = useSelector(
        (state: RootState) => state.simulator.quiz
    );

    const currentQuestionIndex = useSelector(
        (state: RootState) =>
            state.simulator.currentQuestionIndex
    );

    if (!quiz) {
        return <h2>Тест не найден</h2>;
    }

    const question =
        quiz.questions[currentQuestionIndex];

    return (
        <div>

            <h1>
                {question.title}
            </h1>

            <p>
                {question.description}
            </p>

        </div>
    );
}

export default SimulatorSessionPage;
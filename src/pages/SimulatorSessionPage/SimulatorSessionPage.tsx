import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import SimulatorSession
    from "../../components/Simulator/SimulatorSession/SimulatorSession";
import SimulatorResult
    from "../../components/Simulator/SimulatorResult/SimulatorResult";
import styles from "./SimulatorSessionPage.module.css";

function SimulatorSessionPage() {

    const {
        quiz,
        currentQuestionIndex,
        isFinished,
    } = useSelector(
        (state: RootState) => state.simulator
    );

    if (!quiz) {
        return (
            <main className={styles.page}>
                <div className={styles.container}>
                    <h2>Тест не найден</h2>
                </div>
            </main>
        );
    }

    if (isFinished) {
        return (
            <main className={styles.page}>
                <div className={styles.container}>
                    <SimulatorResult />
                </div>
            </main>
        );
    }

    const question =
        quiz.questions[currentQuestionIndex];

    return (
        <main className={styles.page}>

            <div className={styles.container}>

                <SimulatorSession
                    question={question}
                    currentQuestion={
                        currentQuestionIndex + 1
                    }
                    totalQuestions={
                        quiz.questions.length
                    }
                    isFirst={
                        currentQuestionIndex === 0
                    }
                    isLast={
                        currentQuestionIndex ===
                        quiz.questions.length - 1
                    }
                />

            </div>

        </main>
    );
}

export default SimulatorSessionPage;
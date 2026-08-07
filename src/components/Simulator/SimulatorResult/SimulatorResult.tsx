import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import styles from "./SimulatorResult.module.css";

function SimulatorResult() {

    const {
        quiz,
        answers,
    } = useSelector(
        (state: RootState) => state.simulator
    );

    if (!quiz) {
        return null;
    }

    const knownCount =
        answers.filter(
            (answer) => answer.answer === "KNOWN"
        ).length;

    const unknownCount =
        answers.filter(
            (answer) => answer.answer === "UNKNOWN"
        ).length;

    const total =
        quiz.questions.length;

    const progress =
        total > 0
            ? Math.round(
                (knownCount / total) * 100
            )
            : 0;

    return (
        <main className={styles.result}>

            <h1 className={styles.title}>
                Тест завершен
            </h1>

            <div className={styles.stats}>

                <div className={styles.stat}>
                    <span>
                        Всего
                    </span>

                    <strong>
                        {total}
                    </strong>
                </div>

                <div className={styles.stat}>
                    <span>
                        Знаю
                    </span>

                    <strong>
                        {knownCount}
                    </strong>
                </div>

                <div className={styles.stat}>
                    <span>
                        Не знаю
                    </span>

                    <strong>
                        {unknownCount}
                    </strong>
                </div>

                <div className={styles.stat}>
                    <span>
                        Изучено
                    </span>

                    <strong>
                        {progress}%
                    </strong>
                </div>

            </div>

        </main>
    );
}

export default SimulatorResult;
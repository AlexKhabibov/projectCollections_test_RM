import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import styles from "./SimulatorResult.module.css";
import SimulatorResultQuestions from "./SimulatorResultQuestions/SimulatorResultQuestions";
import SimulatorResultActions from "./SimulatorResultActions/SimulatorResultActions";

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

    const totalQuestions =
        quiz.questions.length;

    const knownCount =
        answers.filter(
            (answer) =>
                answer.answer === "KNOWN"
        ).length;

    const unknownCount =
        answers.filter(
            (answer) =>
                answer.answer === "UNKNOWN"
        ).length;

    const studiedPercent =
        totalQuestions > 0
            ? Math.round(
                (knownCount / totalQuestions) * 100
            )
            : 0;

    return (
        <main className={styles.result}>

            <header className={styles.header}>

                <div>

                    <h1 className={styles.title}>
                        Результат собеседования
                    </h1>

                    <p className={styles.subtitle}>
                        Статистика пройденных вопросов
                    </p>

                </div>

            </header>

            <section className={styles.statistics}>

                <div className={styles.mainStat}>

                    <span className={styles.mainStatValue}>
                        {studiedPercent}%
                    </span>

                    <span className={styles.mainStatLabel}>
                        Изучено
                    </span>

                </div>

                <div className={styles.stat}>

                    <span className={styles.statValue}>
                        {totalQuestions}
                    </span>

                    <span className={styles.statLabel}>
                        Всего
                    </span>

                </div>

                <div className={styles.stat}>

                    <span className={styles.statValue}>
                        {knownCount}
                    </span>

                    <span className={styles.statLabel}>
                        Знаю
                    </span>

                </div>

                <div className={styles.stat}>

                    <span className={styles.statValue}>
                        {unknownCount}
                    </span>

                    <span className={styles.statLabel}>
                        Не знаю
                    </span>

                </div>

            </section>

            <SimulatorResultQuestions />

            <SimulatorResultActions />

        </main>
    );
}

export default SimulatorResult;
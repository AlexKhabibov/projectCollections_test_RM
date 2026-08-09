import styles from "./SimulatorQuestionsProgress.module.css";

interface Props {
    currentQuestion: number;
    totalQuestions: number;
}

function SimulatorQuestionsProgress({
    currentQuestion,
    totalQuestions,
}: Props) {

    const progress =
        totalQuestions > 0
            ? (currentQuestion / totalQuestions) * 100
            : 0;

    return (
        <section className={styles.progress}>

            <div className={styles.header}>

                <h2 className={styles.title}>
                    Вопросы собеседования
                </h2>

                <span className={styles.counter}>
                    {currentQuestion}/{totalQuestions}
                </span>

            </div>

            <div className={styles.track}>

                <div
                    className={styles.value}
                    style={{
                        width: `${progress}%`,
                    }}
                />

            </div>

        </section>
    );
}

export default SimulatorQuestionsProgress;
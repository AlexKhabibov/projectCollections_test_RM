import styles from "./SimulatorQuestionsProgress.module.css";

interface Props {
    currentQuestion: number;
    totalQuestions: number;
}

function SimulatorQuestionsProgress({
    currentQuestion,
    totalQuestions,
}: Props) {

    const progress = (currentQuestion / totalQuestions) * 100;

    return (

        <section className={styles.wrapper}>

            <div className={styles.header}>

                <h2 className={styles.title}>
                    Вопросы собеседования
                </h2>

                <span className={styles.counter}>
                    {currentQuestion}/{totalQuestions}
                </span>

            </div>

            <div className={styles.progress}>

                <div
                    className={styles.bar}
                    style={{
                        width: `${progress}%`,
                    }}
                />

            </div>

        </section>

    );
}

export default SimulatorQuestionsProgress;
import styles from "./SimulatorQuestionsProgress.module.css";

interface Props {
    current: number;
    total: number;
}

function SimulatorQuestionsProgress({
    current,
    total,
}: Props) {

    const progress = (current / total) * 100;

    return (

        <section className={styles.wrapper}>

            <div className={styles.header}>

                <h2 className={styles.title}>
                    Вопросы собеседования
                </h2>

                <span className={styles.counter}>
                    {current}/{total}
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
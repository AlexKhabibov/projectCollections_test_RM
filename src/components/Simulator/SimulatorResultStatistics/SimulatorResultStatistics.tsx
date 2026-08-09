import styles from "./SimulatorResultStatistics.module.css";
import type { CSSProperties } from "react";

interface Props {
    totalQuestions: number;
    knownCount: number;
    studiedPercent: number;
}

function SimulatorResultStatistics({
    totalQuestions,
    knownCount,
    studiedPercent,
}: Props) {

    return (
        <section className={styles.card}>

            <h2 className={styles.title}>
                Статистика пройденных
                <br />
                вопросов
            </h2>

            <div
                className={styles.progressCircle}
                style={{
                    "--progress": `${studiedPercent * 3.6}deg`,
                } as CSSProperties}
            >
                <div className={styles.progressCircleInner}>

                    <strong>
                        {studiedPercent}%
                    </strong>

                    <span>
                        Изученно
                    </span>

                </div>
            </div>

            <div className={styles.statistics}>

                <div className={styles.stat}>
                    <span>Всего</span>
                    <strong>
                        {totalQuestions}
                    </strong>
                </div>

                <div className={styles.stat}>
                    <span>Новые</span>
                    <strong>
                        {totalQuestions}
                    </strong>
                </div>

                <div className={styles.stat}>
                    <span>В процессе</span>
                    <strong>
                        0
                    </strong>
                </div>

                <div className={styles.stat}>
                    <span>Изучено</span>
                    <strong>
                        {knownCount}
                    </strong>
                </div>

            </div>

        </section>
    );
}

export default SimulatorResultStatistics;
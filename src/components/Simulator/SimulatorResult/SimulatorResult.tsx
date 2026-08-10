import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import SimulatorSkillsProgress
    from "../SimulatorSkillsProgress/SimulatorSkillsProgress";
import SimulatorResultQuestions
    from "./SimulatorResultQuestions/SimulatorResultQuestions";
import SimulatorResultStatistics
    from "../SimulatorResultStatistics/SimulatorResultStatistics";
import SimulatorStatisticsModal
    from "../SimulatorStatisticsModal/SimulatorStatisticsModal";
import styles from "./SimulatorResult.module.css";
import { calculateSkillsProgress } from "../../../utils/simulatorUtils";

function SimulatorResult() {

    const [
        isStatisticsOpen,
        setIsStatisticsOpen,
    ] = useState(false);

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

    const studiedPercent =
        totalQuestions > 0
            ? Math.round(
                (knownCount /
                    totalQuestions) *
                100
            )
            : 0;

    const skillsProgress =
        calculateSkillsProgress(
            quiz.questions,
            answers
        );

    return (
        <main className={styles.result}>

            <section className={styles.overview}>

                <header className={styles.header}>

                    <h1 className={styles.title}>
                        Умный режим изучения вопросов
                    </h1>

                    <button
                        type="button"
                        className={
                            styles.statisticsLink
                        }
                        onClick={() =>
                            setIsStatisticsOpen(true)
                        }
                    >
                        Посмотреть статистику

                        <span>→</span>
                    </button>

                </header>

                <div
                    className={
                        styles.overviewContent
                    }
                >

                    <SimulatorResultStatistics
                        totalQuestions={
                            totalQuestions
                        }
                        knownCount={
                            knownCount
                        }
                        studiedPercent={
                            studiedPercent
                        }
                    />

                    <SimulatorSkillsProgress />

                </div>

            </section>

            <section
                className={styles.questionsCard}
            >

                <h2
                    className={
                        styles.questionsTitle
                    }
                >
                    Список пройденных вопросов
                    собеседования
                </h2>

                <SimulatorResultQuestions />

            </section>

            {isStatisticsOpen && (
                <SimulatorStatisticsModal
                    skillsProgress={
                        skillsProgress
                    }
                    totalQuestions={
                        totalQuestions
                    }
                    knownCount={
                        knownCount
                    }
                    onClose={() =>
                        setIsStatisticsOpen(false)
                    }
                />
            )}

        </main>
    );
}

export default SimulatorResult;
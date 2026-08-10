import { calculateSkillPercent, type SkillProgress } from "../../../utils/simulatorUtils";
import styles from "./SimulatorStatisticsModal.module.css";

interface Props {
    onClose: () => void;
    skillsProgress: SkillProgress[];
    totalQuestions: number;
    knownCount: number;
}

function SimulatorStatisticsModal({
    onClose,
    skillsProgress,
    totalQuestions,
    knownCount,
}: Props) {

    const totalPercent =
        totalQuestions > 0
            ? Math.round(
                (knownCount /
                    totalQuestions) *
                100
            )
            : 0;

    return (
        <div
            className={styles.overlay}
            onMouseDown={onClose}
        >
            <div
                className={styles.modal}
                onMouseDown={(event) =>
                    event.stopPropagation()
                }
            >

                <button
                    type="button"
                    className={styles.close}
                    onClick={onClose}
                    aria-label="Закрыть"
                >
                    ×
                </button>

                <div className={styles.content}>

                    <div className={styles.left}>

                        <div className={styles.icon}>
                            ▥
                        </div>

                        <h2 className={styles.title}>
                            Станьте членом сообщества
                        </h2>

                        <p className={styles.description}>
                            Хотите видеть весь свой прогресс?
                            <br />
                            С подпиской вы получите доступ ко всем
                            метрикам:
                        </p>

                        <ul className={styles.features}>

                            <li>
                                <span>✓</span>
                                Полный доступ к тренажёру
                            </li>

                            <li>
                                <span>✓</span>
                                Умный режим повторения вопросов
                            </li>

                            <li>
                                <span>✓</span>
                                Детальная статистика прогресса
                            </li>

                            <li>
                                <span>✓</span>
                                Закрытые собесы топовых компаний
                            </li>

                        </ul>

                        <button
                            type="button"
                            className={
                                styles.subscribeButton
                            }
                        >
                            Стать участником
                        </button>

                        <div className={styles.freePeriod}>
                            7 дней бесплатно
                        </div>

                    </div>

                    <div className={styles.right}>

                        <div className={styles.progressCard}>

                            <h3
                                className={
                                    styles.progressTitle
                                }
                            >
                                Прогресс
                            </h3>

                            <div
                                className={
                                    styles.totalProgress
                                }
                            >

                                <div
                                    className={
                                        styles.totalProgressText
                                    }
                                >
                                    Пройдено {knownCount} из{" "}
                                    {totalQuestions} вопросов
                                    изучено!
                                </div>

                                <div
                                    className={
                                        styles.totalProgressTrack
                                    }
                                >
                                    <div
                                        className={
                                            styles.totalProgressBar
                                        }
                                        style={{
                                            width:
                                                `${totalPercent}%`,
                                        }}
                                    />
                                </div>

                            </div>

                            <div
                                className={styles.skills}
                            >

                                {skillsProgress.map(
                                    (skill) => {

                                        const percent =
                                            calculateSkillPercent(
                                                skill
                                            );

                                        return (
                                            <div
                                                key={skill.id}
                                                className={
                                                    styles.skill
                                                }
                                            >

                                                <div
                                                    className={
                                                        styles.skillHeader
                                                    }
                                                >
                                                    <span>
                                                        {
                                                            skill.title
                                                        }
                                                    </span>

                                                    <span>
                                                        {percent}%
                                                    </span>
                                                </div>

                                                <div
                                                    className={
                                                        styles.skillTrack
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.skillBar
                                                        }
                                                        style={{
                                                            width:
                                                                `${percent}%`,
                                                        }}
                                                    />
                                                </div>

                                            </div>
                                        );
                                    }
                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default SimulatorStatisticsModal;
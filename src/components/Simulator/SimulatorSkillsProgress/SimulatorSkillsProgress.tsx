import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import styles from "./SimulatorSkillsProgress.module.css";
import { calculateSkillPercent, calculateSkillsProgress } from "../../../utils/simulatorUtils";

function SimulatorSkillsProgress() {

    const {
        quiz,
        answers,
    } = useSelector(
        (state: RootState) => state.simulator
    );

    if (!quiz) {
        return null;
    }

    const skillsProgress =
        calculateSkillsProgress(
            quiz.questions,
            answers
        );

    return (
        <section className={styles.card}>

            <h2 className={styles.title}>
                Прогресс обучения по навыкам
            </h2>

            <div className={styles.list}>

                {skillsProgress.map((skill) => {

                    const percent =
                        calculateSkillPercent(skill);

                    return (
                        <div
                            key={skill.id}
                            className={styles.skill}
                        >

                            <div
                                className={
                                    styles.skillHeader
                                }
                            >
                                <span>
                                    {skill.title}
                                </span>

                                <span>
                                    {skill.known}/
                                    {skill.total}
                                </span>
                            </div>

                            <div
                                className={styles.track}
                            >
                                <div
                                    className={styles.progress}
                                    style={{
                                        width:
                                            `${percent}%`,
                                    }}
                                />
                            </div>

                        </div>
                    );
                })}

            </div>

        </section>
    );
}

export default SimulatorSkillsProgress;
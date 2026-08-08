import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import type {
    Question,
    SimulatorAnswer,
} from "../../../types/types";
import styles from "./SimulatorSkillsProgress.module.css";

interface SkillProgress {
    id: number;
    title: string;
    total: number;
    known: number;
}

function calculateSkillsProgress(
    questions: Question[],
    answers: SimulatorAnswer[]
): SkillProgress[] {

    const skillsMap = new Map<number, SkillProgress>();

    questions.forEach((question) => {

        question.questionSkills.forEach((skill) => {

            const skillId = Number(skill.id);

            if (!skillsMap.has(skillId)) {
                skillsMap.set(skillId, {
                    id: skillId,
                    title: skill.title,
                    total: 0,
                    known: 0,
                });
            }

            const skillProgress =
                skillsMap.get(skillId)!;

            skillProgress.total++;
        });
    });

    answers.forEach((answer) => {

        if (answer.answer !== "KNOWN") {
            return;
        }

        const question =
            questions.find(
                (question) =>
                    Number(question.id) ===
                    answer.questionId
            );

        if (!question) {
            return;
        }

        question.questionSkills.forEach((skill) => {

            const skillProgress =
                skillsMap.get(Number(skill.id));

            if (skillProgress) {
                skillProgress.known++;
            }
        });
    });

    return Array.from(
        skillsMap.values()
    );
}

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
        <section className={styles.section}>

            <h2 className={styles.title}>
                Прогресс обучения по навыкам
            </h2>

            <div className={styles.list}>

                {skillsProgress.map((skill) => {

                    const percent =
                        skill.total > 0
                            ? Math.round(
                                (skill.known /
                                    skill.total) *
                                100
                            )
                            : 0;

                    return (
                        <div
                            key={skill.id}
                            className={styles.skill}
                        >

                            <div
                                className={styles.skillHeader}
                            >

                                <span
                                    className={
                                        styles.skillTitle
                                    }
                                >
                                    {skill.title}
                                </span>

                                <span
                                    className={
                                        styles.skillCount
                                    }
                                >
                                    {skill.known} /{" "}
                                    {skill.total}
                                </span>

                            </div>

                            <div
                                className={styles.track}
                            >

                                <div
                                    className={styles.bar}
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
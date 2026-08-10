import type { Question, SimulatorAnswer } from "../types/types";

export interface SkillProgress {
    id: number;
    title: string;
    total: number;
    known: number;
}

export function calculateSkillsProgress(
    questions: Question[],
    answers: SimulatorAnswer[]
): SkillProgress[] {

    const skillsMap =
        new Map<number, SkillProgress>();

    // Сначала считаем, сколько всего вопросов
    // относится к каждому навыку.
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

export function calculateSkillPercent(
    skill: SkillProgress
): number {

    if (skill.total === 0) {
        return 0;
    }

    return Math.round(
        (skill.known / skill.total) * 100
    );
}
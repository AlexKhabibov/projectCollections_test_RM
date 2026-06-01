import { useState } from "react";
import styles from "./SkillsFilter.module.css";
import type { Skill } from "../../../types/apiTypes";

interface SkillsFilterProps {
    skills: Skill[];
    selectedSkills: number[];
    setSelectedSkills: (value: number[]) => void;
}

function SkillsFilter({
    skills,
    selectedSkills,
    setSelectedSkills
}: SkillsFilterProps) {
    const [showAll, setShowAll] = useState<boolean>(false);

    const toggleSkill = (id: number) => {
        const newSkills = selectedSkills.includes(id)
            ? selectedSkills.filter(skillId => skillId !== id)
            : [...selectedSkills, id];

        setSelectedSkills(newSkills);
    };

    const visibleSkills = showAll
        ? skills
        : skills.slice(0, 8);

    return (
        <div className={styles.section}>
            <h3 className={styles.title}>Навыки</h3>
            <div className={styles.tags}>
                {visibleSkills.map(skill => (
                    <button
                        key={skill.id}
                        type="button"
                        onClick={() => toggleSkill(skill.id)}
                        className={
                            selectedSkills.includes(skill.id)
                                ? styles.active
                                : ""
                        }
                    >
                        {skill.title}
                    </button>
                ))}
            </div>
            {skills.length > 8 && (
                <button
                    type="button"
                    className={styles.moreBtn}
                    onClick={() => setShowAll(prev => !prev)}
                >
                    {showAll ? "Скрыть" : "Показать еще"}
                </button>
            )}
        </div>
    );
}

export default SkillsFilter;
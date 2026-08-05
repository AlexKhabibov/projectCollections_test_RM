import type { Skill } from "../../../types/types";
import styles from "./CategorySelect.module.css";

interface Props {
    skills: Skill[];
    selectedSkills: string[];
    onChange: (skills: string[]) => void;
}

function CategorySelect({
    skills,
    selectedSkills,
    onChange,
}: Props) {

    const handleToggleSkill = (
        skillId: string
    ) => {

        if (selectedSkills.includes(skillId)) {

            onChange(
                selectedSkills.filter(
                    (id) => id !== skillId
                )
            );

            return;
        }

        onChange([
            ...selectedSkills,
            skillId,
        ]);
    };

    return (
        <div className={styles.wrapper}>

            <h2 className={styles.title}>
                Категории вопросов
            </h2>

            <div className={styles.buttons}>

                {skills.map((skill) => {

                    const isSelected =
                        selectedSkills.includes(
                            String(skill.id)
                        );

                    return (

                        <button
                            key={skill.id}
                            type="button"
                            onClick={() =>
                                handleToggleSkill(
                                    String(skill.id)
                                )
                            }
                            className={
                                isSelected
                                    ? `${styles.button} ${styles.selected}`
                                    : styles.button
                            }
                        >
                            {skill.title}
                        </button>

                    );

                })}

            </div>

        </div>
    );
}

export default CategorySelect;
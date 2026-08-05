import type { Skill } from "../../../types/types";

interface Props {
    skills: Skill[];
    selectedSkills: string[];
    onChange: (skills: string[]) => void;
}

function SkillsSelect({
    skills,
    selectedSkills,
    onChange,
}: Props) {

    const handleToggleSkill = (
        skillId: string
    ) => {

        if (
            selectedSkills.includes(skillId)
        ) {

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
        <div>

            <h2>
                Выберите навыки
            </h2>

            <div>

                {skills.map((skill) => (

                    <button
                        key={skill.id}
                        type="button"
                        onClick={() =>
                            handleToggleSkill(
                                String(skill.id)
                            )
                        }
                    >
                        {skill.title}
                    </button>

                ))}

            </div>

        </div>
    );
}

export default SkillsSelect;
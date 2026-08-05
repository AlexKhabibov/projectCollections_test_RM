import { useState } from "react";
import { useGetSpecializationsQuery } from "../../../api/apiSlice/specializationsApiSlice";
import { useGetSkillsQuery } from "../../../api/apiSlice/skillsApiSlice";
import type { SimulatorDifficulty } from "../../../types/types";
import SpecializationSelect from "./SpecializationSelect";
import SkillsSelect from "./SkillsSelect";
import DifficultySelect from "./DifficultySelect";

function SimulatorSettings() {

    const {
        data: specializations,
        isLoading: isSpecializationsLoading,
        error: specializationsError,
    } = useGetSpecializationsQuery();

    const {
        data: skills,
        isLoading: isSkillsLoading,
        error: skillsError,
    } = useGetSkillsQuery();

    const [
        selectedSpecialization,
        setSelectedSpecialization,
    ] = useState<string | null>(null);

    const [
        selectedSkills,
        setSelectedSkills,
    ] = useState<string[]>([]);

    const [
        difficulty,
        setDifficulty,
    ] = useState<SimulatorDifficulty | null>(null);

    if (
        isSpecializationsLoading ||
        isSkillsLoading
    ) {
        return <div>Загрузка...</div>;
    }

    if (
        specializationsError ||
        skillsError
    ) {
        return (
            <div>
                Ошибка загрузки данных
            </div>
        );
    }

    if (
        !specializations ||
        !skills
    ) {
        return (
            <div>
                Данные не найдены
            </div>
        );
    }

    const filteredSkills =
        selectedSpecialization === null
            ? skills
            : skills.filter((skill) =>
                skill.specializations.some(
                    (specialization) =>
                        specialization.id ===
                        selectedSpecialization
                )
            );

    const handleSpecializationChange = (
        specializationId: string
    ) => {

        setSelectedSpecialization(
            specializationId
        );

        setSelectedSkills([]);
    };

    return (
        <div>

            <h1>
                Собеседование
            </h1>

            <SpecializationSelect
                specializations={specializations}
                value={selectedSpecialization}
                onChange={
                    handleSpecializationChange
                }
            />

            <SkillsSelect
                skills={filteredSkills}
                selectedSkills={selectedSkills}
                onChange={setSelectedSkills}
            />

            <DifficultySelect
                value={difficulty}
                onChange={setDifficulty}
            />

        </div>
    );
}

export default SimulatorSettings;
import { useState } from "react";
import { useGetSpecializationsQuery } from "../../../api/apiSlice/specializationsApiSlice";
import { useGetSkillsQuery } from "../../../api/apiSlice/skillsApiSlice";
import type { SimulatorDifficulty } from "../../../types/types";

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

    return (
        <div>

            <h1>
                Тренажер
            </h1>

            <p>
                Специализаций: {specializations.length}
            </p>

            <p>
                Навыков: {skills.length}
            </p>

        </div>
    );
}

export default SimulatorSettings;
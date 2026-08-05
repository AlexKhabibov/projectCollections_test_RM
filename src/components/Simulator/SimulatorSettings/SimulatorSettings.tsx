import { useState } from "react";
import { useGetSpecializationsQuery } from "../../../api/apiSlice/specializationsApiSlice";
import { useGetSkillsQuery } from "../../../api/apiSlice/skillsApiSlice";
import type { SimulatorDifficulty, SimulatorQuestionMode } from "../../../types/types";
import SpecializationSelect from "./SpecializationSelect";
import DifficultySelect from "./DifficultySelect";
import CategorySelect from "./CategorySelect";
import QuestionModeSelect from "./QuestionModeSelect";
import QuestionsCountInput from "./QuestionsCountInput";
import StartSimulatorButton from "./StartSimulatorButton";
import { useLazyStartSimulatorQuery } from "../../../api/apiSlice/simulatorApiSlice";

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

    const [
        questionMode,
        setQuestionMode,
    ] = useState<SimulatorQuestionMode | null>(null);

    const [
        questionsCount,
        setQuestionsCount,
    ] = useState(20);

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

    const [
        startSimulator,
        {
            data,
            isLoading,
            error,
        },
    ] = useLazyStartSimulatorQuery();

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
    const handleStart = () => {

        console.log({
            selectedSpecialization,
            selectedSkills,
            difficulty,
            questionMode,
            questionsCount,
        });

    };

    return (
        <div>

            <h1>
                Собеседование
            </h1>

            <SpecializationSelect
                specializations={specializations}
                value={selectedSpecialization}
                onChange={handleSpecializationChange}
            />

            <CategorySelect
                skills={filteredSkills}
                selectedSkills={selectedSkills}
                onChange={setSelectedSkills}
            />

            <DifficultySelect
                value={difficulty}
                onChange={setDifficulty}
            />

            <QuestionModeSelect
                value={questionMode}
                onChange={setQuestionMode}
            />

            <QuestionsCountInput
                value={questionsCount}
                onChange={setQuestionsCount}
            />

            <StartSimulatorButton
                disabled={
                    selectedSpecialization === null ||
                    selectedSkills.length === 0 ||
                    difficulty === null ||
                    questionMode === null
                }
                onClick={handleStart}
            />

        </div>
    );
}

export default SimulatorSettings;
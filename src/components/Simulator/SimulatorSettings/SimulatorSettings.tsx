import { useState } from "react";
import { useGetSkillsQuery } from "../../../api/apiSlice/skillsApiSlice";
import type {
    SimulatorDifficulty,
    SimulatorQuestionMode,
} from "../../../types/types";

import SpecializationSelect from "./SpecializationSelect";
import DifficultySelect from "./DifficultySelect";
import CategorySelect from "./CategorySelect";
import QuestionModeSelect from "./QuestionModeSelect";
import QuestionsCountInput from "./QuestionsCountInput";
import StartSimulatorButton from "./StartSimulatorButton";

import { useLazyStartSimulatorQuery } from "../../../api/apiSlice/simulatorApiSlice";
import { useDispatch } from "react-redux";
import { setQuiz } from "../../../store/simulatorSlice";
import { useNavigate } from "react-router-dom";

import styles from "./SimulatorSettings.module.css";
import { useGetSpecializationsQuery } from "../../../api/apiSlice/specializationsApiSlice";

function SimulatorSettings() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const [startSimulator] =
        useLazyStartSimulatorQuery();

    if (
        isSpecializationsLoading ||
        isSkillsLoading
    ) {
        return (
            <div className={styles.status}>
                Загрузка...
            </div>
        );
    }

    if (
        specializationsError ||
        skillsError
    ) {
        return (
            <div className={styles.status}>
                Ошибка загрузки данных
            </div>
        );
    }

    if (!specializations || !skills) {
        return (
            <div className={styles.status}>
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
        setSelectedSpecialization(specializationId);
        setSelectedSkills([]);
    };

    const handleStart = async () => {

        if (
            selectedSpecialization === null ||
            difficulty === null
        ) {
            return;
        }

        try {
            const result = await startSimulator({
                specialization:
                    Number(selectedSpecialization),
                skills: selectedSkills,
                difficulty,
                limit: questionsCount,
            }).unwrap();

            dispatch(setQuiz(result));
            navigate("/simulator-session");

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className={styles.settings}>

            <h1 className={styles.title}>
                Собеседование
            </h1>

            <div className={styles.content}>

                <div className={styles.leftColumn}>

                    <div className={styles.block}>
                        <SpecializationSelect
                            specializations={specializations}
                            value={selectedSpecialization}
                            onChange={
                                handleSpecializationChange
                            }
                        />
                    </div>

                    <div className={styles.block}>
                        <CategorySelect
                            skills={filteredSkills}
                            selectedSkills={selectedSkills}
                            onChange={setSelectedSkills}
                        />
                    </div>

                </div>

                <div className={styles.rightColumn}>

                    <div className={styles.block}>
                        <DifficultySelect
                            value={difficulty}
                            onChange={setDifficulty}
                        />
                    </div>

                    <div className={styles.block}>
                        <QuestionModeSelect
                            value={questionMode}
                            onChange={setQuestionMode}
                        />
                    </div>

                    <div className={styles.block}>
                        <QuestionsCountInput
                            value={questionsCount}
                            onChange={setQuestionsCount}
                        />
                    </div>

                </div>

            </div>

            <div className={styles.footer}>

                <div className={styles.actions}>

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

            </div>

        </section>
    );
}

export default SimulatorSettings;
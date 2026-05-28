import styles from "./Sidebar.module.css";
import SearchQuestions from "./SearchQuestions/SearchQuestions";
import SpecializationFilter from "./SpecializationFilter/SpecializationFilter";
import SkillsFilter from "./SkillsFilter/SkillsFilter";
import type { Skill, Specialization } from "../../types/apiTypes";

export type QuestionListSidebarProps = {
    search: string;
    setSearch: (value: string) => void;
    skills: Skill[];
    selectedSkills: number[];
    setSelectedSkills: (value: number[]) => void;
    specializations: Specialization[];
    selectedSpecializations: number[];
    setSelectedSpecializations: (value: number[]) => void;
};

function QuestionListSidebar({
    search,
    setSearch,
    skills = [],
    selectedSkills,
    setSelectedSkills,
    specializations = [],
    selectedSpecializations,
    setSelectedSpecializations
}: QuestionListSidebarProps) {
    return (
        <aside className={styles.sidebar}>
            <SearchQuestions
                search={search}
                setSearch={setSearch}
            />

            <SpecializationFilter
                specializations={specializations}
                selectedSpecializations={selectedSpecializations}
                setSelectedSpecializations={setSelectedSpecializations}
            />

            <SkillsFilter
                skills={skills}
                selectedSkills={selectedSkills}
                setSelectedSkills={setSelectedSkills}
            />
        </aside>
    );
}

export default QuestionListSidebar;
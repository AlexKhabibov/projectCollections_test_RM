import styles from "./Sidebar.module.css";
import SearchQuestions from "./SearchQuestions/SearchQuestions";
import SpecializationFilter from "./SpecializationFilter/SpecializationFilter";
import SkillsFilter from "./SkillsFilter/SkillsFilter";
import type { Skill, Specialization } from "../../types/apiTypes";

export type SidebarProps = {
    search: string;
    setSearch: (value: string) => void;
    skills: Skill[];
    selectedSkills: number[];
    setSelectedSkills: React.Dispatch<React.SetStateAction<number[]>>;
    specializations: Specialization[];
    selectedSpecializations: number[];
    setSelectedSpecializations: React.Dispatch<React.SetStateAction<number[]>>;
};

function QuestionListSidebar({
    search,
    setSearch,
    skills,
    selectedSkills,
    setSelectedSkills,
    specializations,
    selectedSpecializations,
    setSelectedSpecializations
}: SidebarProps) {
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
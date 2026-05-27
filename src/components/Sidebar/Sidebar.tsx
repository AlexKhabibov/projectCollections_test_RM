import styles from "./Sidebar.module.css";
import SearchQuestions from "./SearchQuestions/SearchQuestions";
import SpecializationFilter from "./SpecializationFilter/SpecializationFilter";
import SkillsFilter from "./SkillsFilter/SkillsFilter";
import type { SidebarProps } from "../../types/type";


function Sidebar({
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

export default Sidebar;
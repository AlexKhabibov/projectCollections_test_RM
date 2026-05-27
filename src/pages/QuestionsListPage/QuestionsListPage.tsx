import { useEffect, useState } from "react";
import { getQuestions } from "../../api/questionsApi";
import { getSkills } from "../../api/skillsApi";
import { getSpecializations } from "../../api/specializationsApi";
import { useDebounce } from "../../hooks/useDebounce";
import styles from "./QuestionsListPage.module.css";
import type {
    Question,
    Skill,
    Specialization
} from "../../types/type";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Pagination from "../../components/Pagination/Pagination";

function QuestionsListPage() {

    // DATA
    const [questions, setQuestions] = useState<Question[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [specializations, setSpecializations] = useState<Specialization[]>([]);

    // FILTERS
    const [search, setSearch] = useState("");
    const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
    const [selectedSpecializations, setSelectedSpecializations] = useState<number[]>([]);

    // debounce search
    const debouncedSearch = useDebounce(search.trim(), 500);

    // PAGINATION
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [total, setTotal] = useState(0);

    // Loader
    const [isLoading, setIsLoading] = useState(true);

    // LOAD FILTER DATA
    useEffect(() => {

        Promise.all([
            getSkills(),
            getSpecializations()
        ]).then(([skillsData, specData]) => {

            setSkills(skillsData);
            setSpecializations(specData);

        });

    }, []);

    // LOAD QUESTIONS
    useEffect(() => {

        const load = async () => {

            setIsLoading(true);

            try {

                const res = await getQuestions({
                    page,
                    limit,
                    title: debouncedSearch,
                    skills: selectedSkills,
                    specializationId: selectedSpecializations[0],
                    skillFilterMode: "ANY"
                });

                setQuestions(res.data);
                setTotal(res.total);

            } catch (e) {

                console.error(e);

            } finally {

                setIsLoading(false);

            }
        };

        load();

    }, [
        page,
        limit,
        debouncedSearch,
        selectedSkills,
        selectedSpecializations
    ]);

    // HANDLERS
    const handleSearchChange = (value: string) => {

        setSearch(value);
        setPage(1);

    };

    const handleToggleSkill = (id: number) => {

        setSelectedSkills(prev =>
            prev.includes(id)
                ? prev.filter(s => s !== id)
                : [...prev, id]
        );

        setPage(1);
    };

    const handleToggleSpecialization = (id: number) => {

        setSelectedSpecializations(prev =>
            prev.includes(id)
                ? prev.filter(s => s !== id)
                : [...prev, id]
        );

        setPage(1);
    };

    if (isLoading) {
        return (
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    return (
        <div className={styles.layout}>

            <QuestionsList questions={questions} />

            <Sidebar
                search={search}
                setSearch={handleSearchChange}

                skills={skills}
                selectedSkills={selectedSkills}
                setSelectedSkills={handleToggleSkill}

                specializations={specializations}
                selectedSpecializations={selectedSpecializations}
                setSelectedSpecializations={handleToggleSpecialization}
            />

            <Pagination
                page={page}
                setPage={setPage}
                total={total}
                limit={limit}
            />

        </div>
    );
}

export default QuestionsListPage;
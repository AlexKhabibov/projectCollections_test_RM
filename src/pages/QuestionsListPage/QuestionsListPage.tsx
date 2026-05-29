import { useLoaderData, useNavigation } from "react-router-dom";
import type { GetQuestionsListResponse } from "../../types/apiTypes";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
import QuestionListSidebar from "../../components/QuestionListSidebar/QuestionListSidebar";
import Pagination from "../../components/Pagination/Pagination";
import { useQuestionsFilters } from "../../hooks/useQuestionsFilter";
import { usePagination } from "../../hooks/usePagination";
import styles from "./QuestionsListPage.module.css";

export default function QuestionsListPage() {

    const data = useLoaderData() as GetQuestionsListResponse;
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    const {
        search,
        setSearch,
        selectedSkills,
        setSelectedSkills,
        selectedSpecializations,
        setSelectedSpecializations
    } = useQuestionsFilters();

    const { changePage } = usePagination();

    if (isLoading) {
        return (
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    return (
        <div className={styles.layout}>

            <QuestionsList
                questionsList={data.data}
            />

            <QuestionListSidebar
                search={search}
                setSearch={setSearch}
                skills={[]}
                selectedSkills={selectedSkills}
                setSelectedSkills={setSelectedSkills}
                specializations={[]}
                selectedSpecializations={
                    selectedSpecializations
                }
                setSelectedSpecializations={
                    setSelectedSpecializations
                }
            />

            <Pagination
                page={data.page}
                total={data.total}
                limit={data.limit}
                onPageChange={changePage}
            />
        </div>
    );
}
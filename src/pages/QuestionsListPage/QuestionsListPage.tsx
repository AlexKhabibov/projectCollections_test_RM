import { useLoaderData, useNavigation } from "react-router-dom";
import type { GetQuestionsListResponse } from "../../types/apiTypes";
import { useQuestionsFilters } from "../../hooks/useQuestionsFilter";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
import QuestionListSidebar from "../../components/QuestionListSidebar/QuestionListSidebar";
import Pagination from "../../components/Pagination/Pagination";
import styles from './QuestionsListPage.module.css'

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
        setSelectedSpecializations,
        page,
        setPage
    } = useQuestionsFilters();

    if (isLoading) {
        return (
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    return (
        <div className={styles.layout}>
            <QuestionsList questionsList={data.data} />

            <QuestionListSidebar
                search={search}
                setSearch={setSearch}
                skills={[]}
                selectedSkills={selectedSkills}
                setSelectedSkills={setSelectedSkills}
                specializations={[]}
                selectedSpecializations={selectedSpecializations}
                setSelectedSpecializations={setSelectedSpecializations}
            />

            <Pagination
                page={page}
                setPage={setPage}
                total={data.total}
                limit={data.limit}
            />
        </div>
    );
}
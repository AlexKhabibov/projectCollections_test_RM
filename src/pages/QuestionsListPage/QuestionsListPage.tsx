import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import type { GetQuestionsListResponse } from "../../types/apiTypes";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
import QuestionListSidebar from "../../components/QuestionListSidebar/QuestionListSidebar";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./QuestionsListPage.module.css";

export default function QuestionsListPage() {
    const data = useLoaderData() as GetQuestionsListResponse;

    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const handlePageChange = (page: number) => {
        params.set("page", String(page));
        navigate(`${location.pathname}?${params.toString()}`);
    };

    return (
        <div className={styles.layout}>

            <QuestionsList questionsList={data.data} />

            <QuestionListSidebar
                search={params.get("search") || ""}
                setSearch={(value) => {
                    params.set("search", value);
                    params.set("page", "1");
                    navigate(`${location.pathname}?${params.toString()}`);
                }}
                skills={[]}
                selectedSkills={[]}
                setSelectedSkills={() => { }}
                specializations={[]}
                selectedSpecializations={[]}
                setSelectedSpecializations={() => { }}
            />

            <Pagination
                page={data.page}
                total={data.total}
                limit={data.limit}
                onPageChange={handlePageChange}
            />

        </div>
    );
}
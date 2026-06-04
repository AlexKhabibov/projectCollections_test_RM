import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import type { GetQuestionsListResponse } from "../../types/apiTypes";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
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
        <div className={styles.content}>
            <main className={styles.main}>

                <QuestionsList questionsList={data.data} />

                <Pagination
                    page={data.page}
                    total={data.total}
                    limit={data.limit}
                    onPageChange={handlePageChange}
                />
            </main>
        </div>
    );
}
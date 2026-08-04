import { useNavigate, useLocation } from "react-router-dom";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./QuestionsListPage.module.css";
import { useGetQuestionsQuery } from "../../api/apiSlice/questionsListApiSlice";

export default function QuestionsListPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const page = Number(params.get("page") ?? 1);
    const limit = Number(params.get("limit") ?? 10);
    const search = params.get("search") ?? "";
    const collectionId = params.get("collectionId") ?? "";

    const {
        data,
        isLoading,
        error,
    } = useGetQuestionsQuery({
        page,
        limit,
        search,
        collectionId,
    });

    const handlePageChange = (page: number) => {
        const newParams = new URLSearchParams(location.search);
        newParams.set("page", String(page));
        navigate(`${location.pathname}?${newParams.toString()}`);
    };

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка загрузки</div>;
    }

    if (!data) {
        return <div>Нет данных</div>;
    }

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
};
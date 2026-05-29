import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
import Pagination from "../../components/Pagination/Pagination";

export default function CollectionDetailsPage() {

    const data = useLoaderData();

    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const handlePageChange = (page: number) => {
        params.set("page", String(page));
        navigate(`${location.pathname}?${params.toString()}`);
    };

    return (
        <div>

            <h1>{data.collection.title}</h1>
            <p>{data.collection.description}</p>

            <QuestionsList
                questionsList={data.questions.data}
            />

            <Pagination
                page={data.questions.page}
                total={data.questions.total}
                limit={data.questions.limit}
                onPageChange={handlePageChange}
            />

        </div>
    );
}
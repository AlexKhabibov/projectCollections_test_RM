import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import CollectionCardList from "../../components/CollectionCardList/CollectionCardList";
import Pagination from "../../components/Pagination/Pagination";
import type { GetCollectionsListResponse } from "../../types/apiTypes";

export default function CollectionsPage() {
    const data = useLoaderData() as GetCollectionsListResponse;

    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const handlePageChange = (page: number) => {
        params.set("page", String(page));
        navigate(`${location.pathname}?${params.toString()}`);
    };

    return (
        <div>
            <h1>Коллекции вопросов</h1>

            <CollectionCardList collections={data.data} />

            <Pagination
                page={data.page}
                total={data.total}
                limit={data.limit}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
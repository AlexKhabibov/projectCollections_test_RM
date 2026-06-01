import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import CollectionCardList from "../../components/CollectionCardList/CollectionCardList";
import Pagination from "../../components/Pagination/Pagination";
import type { GetCollectionsListResponse } from "../../types/apiTypes";
import CollectionsListSidebar from "../../components/CollectionsListSidebar/CollectionsListSidebar";

function CollectionsListPage() {
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

            <CollectionCardList collections={data.data} />

            <CollectionsListSidebar />
            
            <Pagination
                page={data.page}
                total={data.total}
                limit={data.limit}
                onPageChange={handlePageChange}
            />

        </div>
    );
}

export default CollectionsListPage;
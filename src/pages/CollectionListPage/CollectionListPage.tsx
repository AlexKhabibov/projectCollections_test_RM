import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import CollectionCardList from "../../components/CollectionCardList/CollectionCardList";
import Pagination from "../../components/Pagination/Pagination";
import type { GetCollectionsListResponse } from "../../types/apiTypes";
import CollectionListSidebar from "../../components/CollectionListSidebar/CollectionListSidebar";

import styles from "./CollectionListPage.module.css";

function CollectionListPage() {
    const data = useLoaderData() as GetCollectionsListResponse;

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
                <CollectionCardList collections={data.data} />

                <Pagination
                    page={data.page}
                    total={data.total}
                    limit={data.limit}
                    onPageChange={handlePageChange}
                />
            </main>

            <aside className={styles.sidebar}>
                <CollectionListSidebar specializations={data.specializations} />
            </aside>
        </div>
    );
}

export default CollectionListPage;
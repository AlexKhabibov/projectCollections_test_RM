import { useState } from "react";
import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import CollectionCardList from "../../components/CollectionCardList/CollectionCardList";
import Pagination from "../../components/Pagination/Pagination";
import CollectionListSidebar from "../../components/CollectionListSidebar/CollectionListSidebar";
import SidebarDrawer from "../../components/Sidebar/SidebarDrawer/SidebarDrawer";
import type { GetCollectionsListResponse } from "../../types/apiTypes";
import styles from "./CollectionListPage.module.css";

function CollectionListPage() {

    const data = useLoaderData() as GetCollectionsListResponse;
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handlePageChange = (
        page: number
    ) => {

        params.set(
            "page",
            String(page)
        );

        navigate(
            `${location.pathname}?${params.toString()}`
        );
    };

    return (
        <div className={styles.content}>

            <main className={styles.main}>

                <button
                    className={
                        styles.mobileSidebarButton
                    }
                    onClick={() =>
                        setIsSidebarOpen(true)
                    }
                >
                    Фильтры
                </button>

                <CollectionCardList
                    collections={data.data}
                />

                <Pagination
                    page={data.page}
                    total={data.total}
                    limit={data.limit}
                    onPageChange={handlePageChange}
                />

            </main>

            <SidebarDrawer
                isOpen={isSidebarOpen}
                onClose={() =>
                    setIsSidebarOpen(false)
                }
            >

                <CollectionListSidebar
                    specializations={
                        data.specializations
                    }
                />

            </SidebarDrawer>

        </div>
    );
}

export default CollectionListPage;
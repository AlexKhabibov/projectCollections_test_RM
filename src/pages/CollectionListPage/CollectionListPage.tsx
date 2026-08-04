import { useState } from "react";
import { useNavigate, useLocation, } from "react-router-dom";
import CollectionCardList from "../../components/CollectionCardList/CollectionCardList";
import Pagination from "../../components/Pagination/Pagination";
import CollectionListSidebar from "../../components/CollectionListSidebar/CollectionListSidebar";
import SidebarDrawer from "../../components/Sidebar/SidebarDrawer/SidebarDrawer";
import styles from "./CollectionListPage.module.css";
import { useGetCollectionsQuery, useGetSpecializationsQuery } from "../../api/apiSlice/collectionListApiSlice";

function CollectionListPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const page = Number(params.get("page") ?? 1);
    const limit = Number(params.get("limit") ?? 10);

    const access = params.get("access") ?? "";

    const {
        data: collections,
        isLoading: isCollectionsLoading,
        error: collectionsError,

    } = useGetCollectionsQuery({
        page,
        limit,
        access,
    });

    const {
        data: specializations,
        isLoading: isSpecializationsLoading,

    } = useGetSpecializationsQuery();

    const [
        isSidebarOpen,
        setIsSidebarOpen,
    ] = useState(false);

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

    if (
        isCollectionsLoading ||
        isSpecializationsLoading
    ) {
        return <div>Загрузка...</div>;
    }

    if (collectionsError) {
        return (
            <div>
                Ошибка загрузки коллекций
            </div>
        );
    }

    if (
        !collections ||
        !specializations
    ) {
        return (
            <div>
                Данные не найдены
            </div>
        );
    }

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
                    collections={
                        collections.data
                    }
                />

                <Pagination
                    page={
                        collections.page
                    }
                    total={
                        collections.total
                    }
                    limit={
                        collections.limit
                    }
                    onPageChange={
                        handlePageChange
                    }
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
                        specializations
                    }
                />

            </SidebarDrawer>

        </div>
    );
}


export default CollectionListPage;
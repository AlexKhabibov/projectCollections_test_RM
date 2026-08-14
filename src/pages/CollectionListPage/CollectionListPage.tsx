import { useState } from "react";
import {
    useNavigate,
    useLocation,
} from "react-router-dom";
import CollectionCardList
    from "../../components/CollectionCardList/CollectionCardList";
import Pagination
    from "../../components/Pagination/Pagination";
import CollectionListSidebar
    from "../../components/CollectionListSidebar/CollectionListSidebar";
import SidebarDrawer
    from "../../components/Sidebar/SidebarDrawer/SidebarDrawer";
import styles from "./CollectionListPage.module.css";
import {
    useGetCollectionsQuery,
} from "../../api/apiSlice/collectionsApiSlice";
import {
    useGetSpecializationsQuery,
} from "../../api/apiSlice/specializationsApiSlice";

function CollectionListPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const page = Number(params.get("page") ?? 1);
    const limit = Number(params.get("limit") ?? 10);
    const access = params.get("access") ?? "";

    const specializationParams =
        params.getAll("specializations");

    const selectedSpecializations =
        specializationParams.map(Number);

    const {
        data: collections,
        isLoading: isCollectionsLoading,
        error: collectionsError,
    } = useGetCollectionsQuery({
        page,
        limit,
        access,
        specializations: selectedSpecializations,
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
        nextPage: number
    ) => {

        const newParams =
            new URLSearchParams(
                location.search
            );

        newParams.set(
            "page",
            String(nextPage)
        );

        navigate(
            `${location.pathname}?${newParams.toString()}`
        );
    };

    if (
        isCollectionsLoading ||
        isSpecializationsLoading
    ) {
        return <div className={styles.loader}>Загрузка...</div>;
    }

    if (collectionsError) {
        return (
            <div className={styles.error}>
                Ошибка загрузки коллекций
            </div>
        );
    }

    if (
        !collections ||
        !specializations
    ) {
        return (
            <div className={styles.data}>
                Данные не найдены
            </div>
        );
    }

    return (
        <div className={styles.content}>

            <main className={styles.main}>

                <button
                    type="button"
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
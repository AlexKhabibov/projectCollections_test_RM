import { useState } from "react";
import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
import Pagination from "../../components/Pagination/Pagination";
import CollectionHeaderCard from "../../components/CollectionHeaderCard/CollectionHeaderCard";
import CollectionDetailsSidebar from "../../components/CollectionDetailsSidebar/CollectionDetailsSidebar";
import SidebarDrawer from "../../components/Sidebar/SidebarDrawer/SidebarDrawer";
import styles from "./CollectionDetailsPage.module.css";

export default function CollectionDetailsPage() {

    const data = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

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
                    Информация
                </button>

                <CollectionHeaderCard
                    collection={data.collection}
                />

                <QuestionsList
                    questionsList={
                        data.questions.data
                    }
                />

                <Pagination
                    page={data.questions.page}
                    total={data.questions.total}
                    limit={data.questions.limit}
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

                <CollectionDetailsSidebar
                    collection={data.collection}
                />

            </SidebarDrawer>

        </div>
    );
}
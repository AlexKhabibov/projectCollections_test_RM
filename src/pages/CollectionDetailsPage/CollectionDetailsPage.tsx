import { useState } from "react";
import { useNavigate, useLocation, useParams, } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import QuestionsList from "../../components/QuestionsList/QuestionsList";
import Pagination from "../../components/Pagination/Pagination";
import CollectionHeaderCard from "../../components/CollectionHeaderCard/CollectionHeaderCard";
import CollectionDetailsSidebar from "../../components/CollectionDetailsSidebar/CollectionDetailsSidebar";
import SidebarDrawer from "../../components/Sidebar/SidebarDrawer/SidebarDrawer";
import { useGetQuestionsQuery } from "../../api/apiSlice/questionsListApiSlice";
import styles from "./CollectionDetailsPage.module.css";
import { useGetCollectionDetailsQuery } from "../../api/apiSlice/collectionDetailsApiSlice";

function CollectionDetailsPage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const page = Number(params.get("page") ?? 1);
    const limit = Number(params.get("limit") ?? 10);

    const {
        data: collection,
        isLoading: isCollectionLoading,
        error: collectionError,

    } = useGetCollectionDetailsQuery(
        id ?? skipToken
    );

    const {
        data: questions,
        isLoading: isQuestionsLoading,
        error: questionsError,

    } = useGetQuestionsQuery(
        id ? {
            collectionId: id,
            page,
            limit,
        }
            : skipToken
    );

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

    if (isCollectionLoading || isQuestionsLoading) {
        return <div>Загрузка...</div>;
    }

    if (collectionError || questionsError) {
        return (
            <div>
                Ошибка загрузки данных
            </div>
        );
    }

    if (!collection || !questions) {
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
                    Информация
                </button>



                <CollectionHeaderCard
                    collection={collection}
                />



                <QuestionsList
                    questionsList={
                        questions.data
                    }
                />



                <Pagination
                    page={
                        questions.page
                    }
                    total={
                        questions.total
                    }
                    limit={
                        questions.limit
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

                <CollectionDetailsSidebar
                    collection={collection}
                />

            </SidebarDrawer>


        </div>
    );
}

export default CollectionDetailsPage;
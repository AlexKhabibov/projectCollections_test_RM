import { useState } from "react";
import { useParams } from "react-router-dom";
import ButtonBackwardToQuestionsList from "../../components/Buttons/ButtonBackwardToQuestionsList/ButtonBackwardToQuestionsList";
import QuestionDetailsCard from "../../components/QuestionDetailsCard/QuestionDetailsCard";
import QuestionDetailsSidebar from "../../components/QuestionDetailsSidebar/QuestionDetailsSidebar";
import SidebarDrawer from "../../components/Sidebar/SidebarDrawer/SidebarDrawer";
import styles from "./QuestionDetailsPage.module.css";
import { useGetQuestionDetailsQuery } from "../../api/apiSlice/questionDetailsApiSlice";
import { skipToken } from "@reduxjs/toolkit/query";

function QuestionDetailsPage() {

    const { id } = useParams();
    
    const {
        data: question,
        isLoading,
        error,
    } = useGetQuestionDetailsQuery(id ?? skipToken);

    const [
        isSidebarOpen,
        setIsSidebarOpen,
    ] = useState(false);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (!question) {
        return <div>Вопрос не найден</div>;
    }

    if (error) {
        return <div>Ошибка загрузки вопроса</div>;
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
                    Детали вопроса
                </button>

                <ButtonBackwardToQuestionsList />

                <QuestionDetailsCard
                    question={question}
                />

            </main>



            <SidebarDrawer
                isOpen={isSidebarOpen}
                onClose={() =>
                    setIsSidebarOpen(false)
                }
            >

                <aside className={styles.sidebarLayout}>

                    <QuestionDetailsSidebar
                        question={question}

                    /></aside>


            </SidebarDrawer>

        </div>
    );
}

export default QuestionDetailsPage;
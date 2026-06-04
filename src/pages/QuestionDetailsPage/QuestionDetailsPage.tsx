import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import type { Question } from "../../types/apiTypes";
import ButtonBackwardToQuestionsList from "../../components/Buttons/ButtonBackwardToQuestionsList/ButtonBackwardToQuestionsList";
import QuestionDetailsCard from "../../components/QuestionDetailsCard/QuestionDetailsCard";
import QuestionDetailsSidebar from "../../components/QuestionDetailsSidebar/QuestionDetailsSidebar";
import SidebarDrawer from "../../components/Sidebar/SidebarDrawer/SidebarDrawer";
import styles from "./QuestionDetailsPage.module.css";

function QuestionDetailsPage() {

    const question =
        useLoaderData() as Question;

    const [
        isSidebarOpen,
        setIsSidebarOpen,
    ] = useState(false);

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

                <aside className={styles.sidebar}>

                    <QuestionDetailsSidebar
                        question={question}

                    /></aside>


            </SidebarDrawer>

        </div>
    );
}

export default QuestionDetailsPage;
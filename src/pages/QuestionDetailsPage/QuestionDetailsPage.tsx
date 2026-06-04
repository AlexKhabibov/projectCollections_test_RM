import { useLoaderData } from "react-router-dom";
import type { Question } from "../../types/apiTypes";
import ButtonBackwardToQuestionsList from "../../components/Buttons/ButtonBackwardToQuestionsList/ButtonBackwardToQuestionsList";
import QuestionDetailsCard from "../../components/QuestionDetailsCard/QuestionDetailsCard";
import QuestionDetailsSidebar from "../../components/QuestionDetailsSidebar/QuestionDetailsSidebar";
import styles from "./QuestionDetailsPage.module.css";

function QuestionDetailsPage() {

    const question =
        useLoaderData() as Question;

    return (
        <div className={styles.content}>

            <main className={styles.main}>

                <ButtonBackwardToQuestionsList />

                <QuestionDetailsCard
                    question={question}
                />

            </main>

            <aside className={styles.sidebar}>

                <QuestionDetailsSidebar
                    question={question}
                />

            </aside>

        </div>
    );
}

export default QuestionDetailsPage;
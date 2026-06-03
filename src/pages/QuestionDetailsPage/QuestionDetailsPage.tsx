import { useLoaderData } from "react-router-dom";
import type { Question } from "../../types/apiTypes";

import ButtonBackwardToQuestionsList from "../../components/Buttons/ButtonBackwardToQuestionsList/ButtonBackwardToQuestionsList";
import QuestionDetailsCard from "../../components/QuestionDetailsCard/QuestionDetailsCard";

import styles from "./QuestionDetailsPage.module.css";
// import QuestionDetailsSidebar from "../../components/QuestionDetailsSidebar/QuestionDetailsSidebar";

function QuestionDetailsPage() {
    const question = useLoaderData() as Question;

    return (
        <div className={styles.page}>
            <ButtonBackwardToQuestionsList />

            <QuestionDetailsCard question={question} />

            {/* <QuestionDetailsSidebar/> */}
        </div>
    );
}

export default QuestionDetailsPage;
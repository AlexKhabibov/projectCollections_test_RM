import { useLoaderData } from "react-router-dom";
import QuestionDetailsCard from "../../components/QuestionDetailsCard/QuestionDetailsCard";
import QuestionDetailsLongAnswer from "../../components/QuestionDetailsLongAnswer/QuestionDetailsLongAnswer";
import QuestionDetailsShortAnswer from "../../components/QuestionDetailsShortAnswer/QuestionDetailsShortAnswer";
import type { Question } from "../../types/apiTypes";

function QuestionDetailsPage() {
    const question = useLoaderData() as Question;

    console.log("QUESTION IN PAGE:", question);

    return (
        <>
            <QuestionDetailsCard question={question} />
            <QuestionDetailsShortAnswer question={question} />
            <QuestionDetailsLongAnswer question={question} />
        </>
    );
}

export default QuestionDetailsPage;
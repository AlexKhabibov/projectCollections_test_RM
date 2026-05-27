import QuestionDetailsCard from "../../components/QuestionDetailsCard/QuestionDetailsCard";
import QuestionDetailsLongAnswer from "../../components/QuestionDetailsLongAnswer/QuestionDetailsLongAnswer";
import QuestionDetailsShortAnswer from "../../components/QuestionDetailsShortAnswer/QuestionDetailsShortAnswer";

function QuestionDetailsPage() {
    return (
        <>
            <QuestionDetailsCard />
            <QuestionDetailsShortAnswer />
            <QuestionDetailsLongAnswer />
        </>
    );
}

export default QuestionDetailsPage;

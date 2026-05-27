
import type { QuestionCardListProps } from "../../types/type";
import QuestionCard from "../QuestionCard/QuestionCard";
import styles from "./QuestionsList.module.css";

function QuestionsList({ questions }: QuestionCardListProps) {
    return (
        <div className={styles.list}>
            {questions.map(q => (
                <QuestionCard
                    key={q.id}
                    question={q}
                />
            ))}
        </div>
    );
}

export default QuestionsList;
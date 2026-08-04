import type { Question } from "../../types/types";
import styles from './QuestionDetailsHeaderCard.module.css';

function QuestionDetailsHeaderCard({
    question
}: {
    question: Question
}) {

    return (
        <div className={styles.card}>

            <div className={styles.imageWrapper}>
                <img
                    src={
                        question.imageSrc ||
                        "https://placehold.co/180x180"
                    }
                    alt={question.title}
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>

                <h1 className={styles.title}>
                    {question.title}
                </h1>

                <p className={styles.description}>
                    {question.description}
                </p>

            </div>

        </div>
    );
}

export default QuestionDetailsHeaderCard;
import type { Question } from '../../types/apiTypes';
import styles from './QuestionDetailsCard.module.css'

function QuestionDetailsCard({ question }: { question: Question }) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <img
                        src="https://placehold.co/180x180"
                        alt="Question preview"
                        className={styles.image}
                    />
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>
                        {question.title}
                    </h2>

                    <p className={styles.description}>
                       {question.description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default QuestionDetailsCard;
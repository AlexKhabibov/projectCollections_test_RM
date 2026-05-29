import type { Question } from '../../types/apiTypes';
import styles from './QuestionDetailsShortAnswer.module.css'

function QuestionDetailsShortAnswer({ question }: { question: Question }) {
    return (
        <>
            <div className={styles.card}>
                <h2 className={styles.title}>
                    {question.shortAnswer}
                </h2>

            </div>
        </>
    );
}

export default QuestionDetailsShortAnswer;
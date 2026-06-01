import type { Question } from '../../types/apiTypes';

import styles from './QuestionDetailsShortAnswer.module.css';

function QuestionDetailsShortAnswer({
    question
}: {
    question: Question
}) {

    return (
        <div className={styles.card}>

            <h2 className={styles.heading}>
                Краткий ответ
            </h2>

            <p className={styles.text}>
                {question.shortAnswer}
            </p>

        </div>
    );
}

export default QuestionDetailsShortAnswer;
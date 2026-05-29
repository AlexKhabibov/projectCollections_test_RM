import type { Question } from '../../types/apiTypes';
import styles from './QuestionDetailsLongAnswer.module.css';

function QuestionDetailsLongAnswer({ question }: { question: Question }) {
    return (
        <>

            <div className={styles.container}>
                <h2 className={styles.title}>
                    {question.longAnswer}
                </h2>

                <div className={styles.content}>
                    <p className={styles.text}>
                        ...
                    </p>
                </div>

                <button className={styles.toggle}>
                    <span>Развернуть</span>

                    <span className={styles.toggleIcon}>
                        ↓
                    </span>
                </button>
            </div>
        </>
    );
}

export default QuestionDetailsLongAnswer;
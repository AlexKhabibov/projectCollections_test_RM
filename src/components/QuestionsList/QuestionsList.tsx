
import styles from './QuestionsList.module.css';
import type { Question } from '../../types/apiTypes';
import QuestionCard from '../QuestionCard/QuestionCard';

function QuestionsList({ questionsList }: { questionsList: Question[] }) {
    
    if (!questionsList?.length) {
        return <div className={styles.empty}>Вопросы не найдены</div>;
    }

    return (
        <div className={styles.list}>
            {questionsList.map(q => (
                <QuestionCard
                    key={q.id}
                    question={q}
                />
            ))}
        </div>

    );
}

export default QuestionsList;
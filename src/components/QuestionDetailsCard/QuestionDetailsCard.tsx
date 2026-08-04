import type { Question } from '../../types/types';
import ForwardRewQuestionDetailsButton from '../Buttons/ForwardRewQuestionDetailsButton/ForwardRewQuestionDetailsButton';
import QuestionDetailsHeaderCard from '../QuestionDetailsHeaderCard/QuestionDetailsHeaderCard';
import QuestionDetailsLongAnswer from '../QuestionDetailsLongAnswer/QuestionDetailsLongAnswer';
import QuestionDetailsShortAnswer from '../QuestionDetailsShortAnswer/QuestionDetailsShortAnswer';

import styles from './QuestionDetailsCard.module.css';

function QuestionDetailsCard({
    question
}: {
    question: Question
}) {

    return (
        <div className={styles.container}>

            <QuestionDetailsHeaderCard question={question} />

            <ForwardRewQuestionDetailsButton question={question} />

            <QuestionDetailsShortAnswer question={question} />

            <QuestionDetailsLongAnswer question={question} />

        </div>
    );
}

export default QuestionDetailsCard;
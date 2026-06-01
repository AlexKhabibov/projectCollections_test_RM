import { useState } from 'react';
import DOMPurify from 'dompurify';

import type { Question } from '../../types/apiTypes';

import styles from './QuestionDetailsLongAnswer.module.css';

function QuestionDetailsLongAnswer({
    question
}: {
    question: Question
}) {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.card}>

            <h2 className={styles.heading}>
                Развёрнутый ответ
            </h2>

            <div
                className={`${styles.content} ${expanded ? styles.expanded : ''
                    }`}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                        question.longAnswer || ''
                    )
                }}
            />

            <button
                className={styles.toggle}
                onClick={() => setExpanded(prev => !prev)}
            >
                {expanded ? 'Свернуть' : 'Развернуть'}
            </button>

        </div>
    );
}

export default QuestionDetailsLongAnswer;
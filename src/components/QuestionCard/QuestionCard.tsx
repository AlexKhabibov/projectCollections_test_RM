import { useState } from "react";
import DOMPurify from "dompurify";
import styles from "./QuestionCard.module.css";
import { Link, useLocation } from "react-router-dom";
import type { Question } from "../../types/apiTypes";

function QuestionCard({ question }: { question: Question }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <div className={styles.card}>


            <div className={styles.titleContainer}>
                <Link
                    to={`/questions/${question.id}${location.search}`}
                    className={styles.linkReset}
                >
                    <h3 className={styles.title}>
                        {question.title}
                    </h3>
                </Link>

                <span className={styles.accordeonAarrow} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "▲" : "▼"}
                </span>
            </div>


            {isOpen && (
                <div className={styles.answer}>

                    <div className={styles.meta}>
                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>Рейтинг</span>

                            <span className={styles.badgeValue}>
                                {question.rate}
                            </span>
                        </div>

                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>Сложность</span>

                            <span className={styles.badgeValue}>
                                {question.complexity}/10
                            </span>
                        </div>
                    </div>

                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(question.longAnswer ?? "")
                        }}
                    />

                </div>
            )}

        </div>
    );
}

export default QuestionCard;
import { useState } from "react";
import DOMPurify from "dompurify";
import styles from "./QuestionCard.module.css";
import type { QuestionCardProps } from "../../types/type";

function QuestionCard({ question }: QuestionCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.card}>

            <button
                className={styles.header}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className={styles.title}>
                    {question.title}
                </h3>

                <span>
                    {isOpen ? "▲" : "▼"}
                </span>
            </button>

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
                            __html: DOMPurify.sanitize(question.longAnswer)
                        }}
                    />

                </div>
            )}

        </div>
    );
}

export default QuestionCard;
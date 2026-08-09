import { useState } from "react";
import type { Question } from "../../../types/types";
import styles from "./SimulatorQuestionCard.module.css";
import DOMPurify from "dompurify";

interface Props {
    question: Question;
    isFirst: boolean;
    isLast: boolean;
}

function SimulatorQuestionCard({
    question,
}: Props) {

    const [isAnswerVisible, setIsAnswerVisible] =
        useState(false);

    const toggleAnswer = () => {
        setIsAnswerVisible((prev) => !prev);
    };

    return (
        <div className={styles.card}>

            <div className={styles.content}>

                <div className={styles.question}>

                    <h1 className={styles.title}>
                        <span className={styles.dot} />

                        <span>
                            {question.title}
                        </span>
                    </h1>

                    <button
                        type="button"
                        className={styles.answerButton}
                        onClick={toggleAnswer}
                    >
                        {isAnswerVisible
                            ? "Скрыть ответ"
                            : "Посмотреть ответ"}
                    </button>

                    {isAnswerVisible && (
                        <div
                            className={styles.answer}
                            dangerouslySetInnerHTML={{
                                __html:
                                    DOMPurify.sanitize(
                                        question.longAnswer
                                    ),
                            }}
                        />
                    )}

                </div>

                <div className={styles.imageWrapper}>

                    {question.imageSrc && (
                        <img
                            src={question.imageSrc}
                            alt=""
                            className={styles.image}
                        />
                    )}

                </div>

            </div>

        </div>
    );
}

export default SimulatorQuestionCard;
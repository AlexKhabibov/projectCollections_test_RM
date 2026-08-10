import { useState } from "react";
import { useDispatch } from "react-redux";
import type { Question } from "../../../types/types";
import DOMPurify from "dompurify";
import { nextQuestion, previousQuestion } from "../../../store/simulatorSlice";
import styles from "./SimulatorQuestionCard.module.css";

interface Props {
    question: Question;
    isFirst: boolean;
    isLast: boolean;
}

function SimulatorQuestionCard({
    question,
    isFirst,
    isLast,
}: Props) {

    const dispatch = useDispatch();

    const [isAnswerVisible, setIsAnswerVisible] =
        useState(false);

    const toggleAnswer = () => {
        setIsAnswerVisible((prev) => !prev);
    };

    const handlePrevious = () => {
        dispatch(previousQuestion());
    };

    const handleNext = () => {
        dispatch(nextQuestion());
    };

    return (
        <div className={styles.card}>

            <div className={styles.navigation}>

                <button
                    type="button"
                    className={styles.navigationButton}
                    disabled={isFirst}
                    onClick={handlePrevious}
                >
                    ← Назад
                </button>

                <button
                    type="button"
                    className={styles.navigationButton}
                    disabled={isLast}
                    onClick={handleNext}
                >
                    Далее →
                </button>

            </div>

            <div className={styles.content}>

                <div className={styles.question}>

                    <h1 className={styles.title}>
                        <span className={styles.dot} />
                        {question.title}
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
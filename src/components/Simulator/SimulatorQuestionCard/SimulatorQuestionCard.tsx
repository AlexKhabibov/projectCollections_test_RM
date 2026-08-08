import { useDispatch } from "react-redux";

import {
    nextQuestion,
    previousQuestion,
} from "../../../store/simulatorSlice";

import type { Question } from "../../../types/types";

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

    return (
        <article className={styles.card}>

            <div className={styles.navigation}>

                <button
                    type="button"
                    disabled={isFirst}
                    onClick={() =>
                        dispatch(previousQuestion())
                    }
                    className={styles.navigationButton}
                >
                    ← Назад
                </button>

                <button
                    type="button"
                    disabled={isLast}
                    onClick={() =>
                        dispatch(nextQuestion())
                    }
                    className={styles.navigationButton}
                >
                    Далее →
                </button>

            </div>

            <div className={styles.content}>

                <div className={styles.text}>

                    <h1 className={styles.title}>
                        {question.title}
                    </h1>

                    <p className={styles.description}>
                        {question.description}
                    </p>

                    <button
                        type="button"
                        className={styles.answerButton}
                    >
                        Посмотреть ответ
                    </button>

                </div>

                <div className={styles.imageWrapper}>

                    {question.imageSrc ? (
                        <img
                            src={question.imageSrc}
                            alt={question.title}
                            className={styles.image}
                        />
                    ) : (
                        <div className={styles.placeholder}>
                            Нет изображения
                        </div>
                    )}

                </div>

            </div>

        </article>
    );
}

export default SimulatorQuestionCard;
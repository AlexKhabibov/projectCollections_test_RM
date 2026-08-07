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

        <section className={styles.card}>

            <header className={styles.header}>

                <button
                    type="button"
                    disabled={isFirst}
                    onClick={() =>
                        dispatch(previousQuestion())
                    }
                    className={styles.navButton}
                >
                    ← Назад
                </button>

                <button
                    type="button"
                    disabled={isLast}
                    onClick={() =>
                        dispatch(nextQuestion())
                    }
                    className={styles.navButton}
                >
                    Далее →
                </button>

            </header>

            <div className={styles.content}>

                <div className={styles.questionBlock}>

                    <h2 className={styles.title}>
                        {question.title}
                    </h2>

                    <button
                        type="button"
                        className={styles.answerButton}
                    >
                        Посмотреть ответ
                    </button>

                </div>

                <div className={styles.imageBlock}>

                    {question.imageSrc ? (

                        <img
                            src={question.imageSrc}
                            alt={question.title}
                            className={styles.image}
                        />

                    ) : (

                        <div className={styles.placeholder}>
                            Изображение
                        </div>

                    )}

                </div>

            </div>

        </section>

    );
}

export default SimulatorQuestionCard;
import { useDispatch } from "react-redux";
import styles from "./SimulatorActions.module.css";
import type { Question } from "../../../types/types";
import {
    answerQuestion,
    nextQuestion,
} from "../../../store/simulatorSlice";

interface Props {
    question: Question;
}

function SimulatorActions({
    question,
}: Props) {

    const dispatch = useDispatch();

    const handleAnswer = (
        answer: "KNOWN" | "UNKNOWN"
    ) => {

        dispatch(
            answerQuestion({
                questionId: Number(question.id),
                questionTitle: question.title,
                answer,
            })
        );

        dispatch(nextQuestion());
    };

    return (
        <section className={styles.actions}>

            <div className={styles.answerButtons}>

                <button
                    type="button"
                    className={styles.unknownButton}
                    onClick={() =>
                        handleAnswer("UNKNOWN")
                    }
                >
                    Не знаю
                </button>

                <button
                    type="button"
                    className={styles.knownButton}
                    onClick={() =>
                        handleAnswer("KNOWN")
                    }
                >
                    Знаю
                </button>

            </div>

            <button
                type="button"
                className={styles.finishButton}
            >
                Завершить
            </button>

        </section>
    );
}

export default SimulatorActions;
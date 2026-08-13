import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    const handleAnswer = (
        answer: "KNOWN" | "UNKNOWN"
    ) => {

        console.log("КЛИК", answer);

        dispatch(
            answerQuestion({
                questionId: Number(question.id),
                questionTitle: question.title,
                answer,
            })
        );

        console.log("DISPATCH ANSWER");

        dispatch(nextQuestion());

        console.log("DISPATCH NEXT");
    };

    const handleFinish = () => {
        navigate("/simulator-result");
    };

    return (
        <section className={styles.actions}>

            <div className={styles.buttons}>

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
                onClick={handleFinish}
            >
                Завершить
            </button>

        </section>
    );
}

export default SimulatorActions;
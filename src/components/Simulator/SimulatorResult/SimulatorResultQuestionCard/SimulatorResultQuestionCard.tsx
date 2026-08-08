import type { Question, SimulatorAnswer } from "../../../../types/types";
import styles from "./SimulatorResultQuestionCard.module.css";

interface Props {
    question: Question;
    answer?: SimulatorAnswer;
}

function SimulatorResultQuestionCard({
    question,
    answer,
}: Props) {

    const isKnown =
        answer?.answer === "KNOWN";

    return (
        <article className={styles.card}>

            <div className={styles.content}>

                {question.imageSrc && (
                    <img
                        src={question.imageSrc}
                        alt={question.title}
                        className={styles.image}
                    />
                )}

                <div className={styles.info}>

                    <h3 className={styles.title}>
                        {question.title}
                    </h3>

                    <span
                        className={
                            isKnown
                                ? styles.known
                                : styles.unknown
                        }
                    >
                        {isKnown
                            ? "Знаю"
                            : "Не знаю"}
                    </span>

                </div>

            </div>

        </article>
    );
}

export default SimulatorResultQuestionCard;
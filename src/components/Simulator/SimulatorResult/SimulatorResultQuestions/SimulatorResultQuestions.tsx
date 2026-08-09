import { useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import styles from "./SimulatorResultQuestions.module.css";

function SimulatorResultQuestions() {

    const {
        quiz,
        answers,
    } = useSelector(
        (state: RootState) => state.simulator
    );

    if (!quiz) {
        return null;
    }

    return (
        <div className={styles.questions}>

            {quiz.questions.map((question) => {

                const answer = answers.find(
                    (item) =>
                        item.questionId ===
                        Number(question.id)
                );

                const isKnown =
                    answer?.answer === "KNOWN";

                return (
                    <article
                        key={question.id}
                        className={styles.question}
                    >

                        <div className={styles.imageWrapper}>

                            {question.imageSrc ? (
                                <img
                                    src={question.imageSrc}
                                    alt=""
                                    className={styles.image}
                                />
                            ) : (
                                <div
                                    className={
                                        styles.imagePlaceholder
                                    }
                                />
                            )}

                        </div>

                        <div className={styles.content}>

                            <h3 className={styles.questionTitle}>
                                {question.title}
                            </h3>

                            <span
                                className={`${styles.status} ${
                                    isKnown
                                        ? styles.known
                                        : styles.unknown
                                }`}
                            >
                                {isKnown
                                    ? "Знаю"
                                    : "Не знаю"}
                            </span>

                        </div>

                    </article>
                );
            })}

        </div>
    );
}

export default SimulatorResultQuestions;
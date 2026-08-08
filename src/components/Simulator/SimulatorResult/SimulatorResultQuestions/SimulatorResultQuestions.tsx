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
        <section className={styles.section}>

            <h2 className={styles.title}>
                Результаты по вопросам
            </h2>

            <div className={styles.list}>

                {quiz.questions.map((question, index) => {

                    const answer =
                        answers.find(
                            (answer) =>
                                answer.questionId ===
                                Number(question.id)
                        );

                    const isKnown =
                        answer?.answer === "KNOWN";

                    return (
                        <article
                            key={question.id}
                            className={styles.question}
                        >

                            <div
                                className={
                                    styles.questionInfo
                                }
                            >

                                <span
                                    className={
                                        styles.questionNumber
                                    }
                                >
                                    {index + 1}
                                </span>

                                <div>

                                    <h3
                                        className={
                                            styles.questionTitle
                                        }
                                    >
                                        {question.title}
                                    </h3>

                                    <p
                                        className={
                                            styles.questionDescription
                                        }
                                    >
                                        {question.description}
                                    </p>

                                </div>

                            </div>

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

                        </article>
                    );
                })}

            </div>

        </section>
    );
}

export default SimulatorResultQuestions;
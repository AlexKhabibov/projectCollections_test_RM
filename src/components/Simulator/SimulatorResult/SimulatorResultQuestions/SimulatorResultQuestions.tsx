import { useSelector } from "react-redux";
import SimulatorResultQuestionCard
    from "../SimulatorResultQuestionCard/SimulatorResultQuestionCard";
import styles from "./SimulatorResultQuestions.module.css";
import type { RootState } from "../../../../store/store";

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
        <section className={styles.questions}>

            <h2 className={styles.title}>
                Пройденные вопросы
            </h2>

            <div className={styles.list}>

                {quiz.questions.map((question) => {

                    const answer =
                        answers.find(
                            (answer) =>
                                answer.questionId ===
                                Number(question.id)
                        );

                    return (
                        <SimulatorResultQuestionCard
                            key={question.id}
                            question={question}
                            answer={answer}
                        />
                    );
                })}

            </div>

        </section>
    );
}

export default SimulatorResultQuestions;
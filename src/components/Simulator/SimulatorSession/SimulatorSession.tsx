import type { Question } from "../../../types/types";
import SimulatorQuestionsProgress from "../SimulatorQuestionsProgress/SimulatorQuestionsProgress";
import SimulatorQuestionCard from "../SimulatorQuestionCard/SimulatorQuestionCard";
import SimulatorActions from "../SimulatorActions/SimulatorActions";
import styles from "./SimulatorSession.module.css";

interface Props {
    question: Question;
    currentQuestion: number;
    totalQuestions: number;
    isFirst: boolean;
    isLast: boolean;
}

function SimulatorSession({
    question,
    currentQuestion,
    totalQuestions,
    isFirst,
    isLast,
}: Props) {

    return (
        <main className={styles.session}>

            <div className={styles.container}>

                <SimulatorQuestionsProgress
                    currentQuestion={currentQuestion}
                    totalQuestions={totalQuestions}
                />

                <section className={styles.questionContainer}>

                    <SimulatorQuestionCard
                        question={question}
                        isFirst={isFirst}
                        isLast={isLast}
                    />

                    <div className={styles.divider} />

                    <SimulatorActions
                        question={question}
                    />

                </section>

            </div>

        </main>
    );
}

export default SimulatorSession;
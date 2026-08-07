import type { Question } from "../../../types/types";
import SimulatorActions from "../SimulatorActions/SimulatorActions";
import SimulatorQuestionCard from "../SimulatorQuestionCard/SimulatorQuestionCard";
import SimulatorQuestionsProgress from "../SimulatorQuestionsProgress/SimulatorQuestionsProgress";
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
        <section className={styles.session}>

            <SimulatorQuestionsProgress
                current={currentQuestion}
                total={totalQuestions}
            />

            <SimulatorQuestionCard
                question={question}
                isFirst={isFirst}
                isLast={isLast}
            />

            <SimulatorActions
                question={question}
            />

        </section>
    );
}

export default SimulatorSession;
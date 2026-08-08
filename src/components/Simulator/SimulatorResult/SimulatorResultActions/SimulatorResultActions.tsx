import { useDispatch } from "react-redux";
import styles from "./SimulatorResultActions.module.css";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../../../../store/simulatorSlice";

function SimulatorResultActions() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRestart = () => {
        dispatch(resetQuiz());
        navigate("/simulator");
    };

    const handleQuestions = () => {
        dispatch(resetQuiz());
        navigate("/questions");
    };

    return (
        <section className={styles.actions}>

            <button
                type="button"
                className={styles.primaryButton}
                onClick={handleRestart}
            >
                Пройти ещё раз
            </button>

            <button
                type="button"
                className={styles.secondaryButton}
                onClick={handleQuestions}
            >
                Вернуться к вопросам
            </button>

        </section>
    );
}

export default SimulatorResultActions;;
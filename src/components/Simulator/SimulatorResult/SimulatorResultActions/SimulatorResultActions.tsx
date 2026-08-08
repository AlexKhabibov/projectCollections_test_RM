import { useNavigate } from "react-router-dom";
import styles from "./SimulatorResultActions.module.css";

function SimulatorResultActions() {

    const navigate = useNavigate();

    const handleRestart = () => {
        navigate("/simulator");
    };

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <section className={styles.actions}>

            <button
                type="button"
                className={styles.primary}
                onClick={handleRestart}
            >
                Пройти ещё раз
            </button>

            <button
                type="button"
                className={styles.secondary}
                onClick={handleGoHome}
            >
                К списку коллекций
            </button>

        </section>
    );
}

export default SimulatorResultActions;
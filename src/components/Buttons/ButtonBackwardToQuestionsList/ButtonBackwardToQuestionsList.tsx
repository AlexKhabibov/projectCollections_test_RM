import { useNavigate } from "react-router-dom";
import styles from "./ButtonBackwardToQuestionsList.module.css";

function ButtonBackwardToQuestionsList() {
    const navigate = useNavigate();

    return (
        <button
            className={styles.button}
            onClick={() => navigate(-1)}
        >
            ← Назад
        </button>
    );
}

export default ButtonBackwardToQuestionsList;
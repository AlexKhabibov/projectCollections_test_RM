import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./ButtonBackwardToQuestionsList.module.css";

function ButtonBackwardToQuestionsList() {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const collectionId = searchParams.get("collectionId");

    const handleBack = () => {

        if (collectionId) {
            navigate(`/collections/${collectionId}`);
            return;
        }

        navigate("/");
    };

    return (
        <button
            className={styles.button}
            onClick={handleBack}
        >
            ← Назад
        </button>
    );
}

export default ButtonBackwardToQuestionsList;
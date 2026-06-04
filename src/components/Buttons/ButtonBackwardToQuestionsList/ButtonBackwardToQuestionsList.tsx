import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from 'framer-motion';
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
        <motion.button
            className={styles.button}
            onClick={handleBack}
            whileHover={{
                scale: 1.05,
                backgroundColor: '#e9ecef',
                transition: { duration: 0.2 }
            }}
            whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
            }}
            whileFocus={{
                scale: 1.02,
                boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.25)'
            }}
        >
            ← Назад
        </motion.button>
    );
}

export default ButtonBackwardToQuestionsList;
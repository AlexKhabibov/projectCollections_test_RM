import styles from './ForwardRewQuestionDetailsButton.module.css';

function ForwardRewQuestionDetailsButton() {
    return (
        <div className={styles.container}>

            <button className={styles.button}>
                ← Предыдущий
            </button>

            <button className={styles.button}>
                Следующий →
            </button>

        </div>
    );
}

export default ForwardRewQuestionDetailsButton;
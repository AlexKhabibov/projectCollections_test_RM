import styles from './QuestionDetailsCard.module.css'

function QuestionDetailsCard() {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <img
                        src="https://placehold.co/180x180"
                        alt="Question preview"
                        className={styles.image}
                    />
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Что такое Virtual DOM,
                        <br />
                        и как он работает?
                    </h2>

                    <p className={styles.description}>
                        Вопрос проверяет знание React под капотом
                    </p>
                </div>
            </div>
        </>
    );
}

export default QuestionDetailsCard;
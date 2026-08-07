import styles from "./SimulatorActions.module.css";

function SimulatorActions() {

    return (

        <section className={styles.actions}>

            <div className={styles.buttons}>

                <button
                    type="button"
                    className={styles.unknownButton}
                >
                    Не знаю
                </button>

                <button
                    type="button"
                    className={styles.knownButton}
                >
                    Знаю
                </button>

            </div>

            <button
                type="button"
                className={styles.finishButton}
            >
                Завершить
            </button>

        </section>

    );
}

export default SimulatorActions;
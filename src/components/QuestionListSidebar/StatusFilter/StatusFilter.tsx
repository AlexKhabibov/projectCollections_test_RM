import styles from "./StatusFilter.module.css";

function StatusFilter() {
    return (
        <div className={styles.section}>

            <h3 className={styles.title}>
                Статус
            </h3>

            <div className={styles.tags}>

                <button>Изученные</button>

                <button>Не изученные</button>

                <button>Все</button>

            </div>

        </div>
    );
}

export default StatusFilter;
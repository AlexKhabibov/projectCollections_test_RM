import styles from "./ComplexityFilter.module.css";

function ComplexityFilter() {
    return (
        <div className={styles.section}>

            <h3 className={styles.title}>
                Уровень сложности
            </h3>

            <div className={styles.tags}>

                <button>1–3</button>

                <button>4–6</button>

                <button>7–8</button>

                <button>9–10</button>

            </div>

        </div>
    );
}

export default ComplexityFilter;
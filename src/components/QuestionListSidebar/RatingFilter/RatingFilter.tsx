import styles from "./RatingFilter.module.css";

function RatingFilter() {
    return (
        <div className={styles.section}>

            <h3 className={styles.title}>
                Рейтинг
            </h3>

            <div className={styles.column}>

                <div className={styles.tags}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>

                </div>

            </div>

        </div>
    );
}

export default RatingFilter;
import styles from './NotFoundPage.module.css'

function NotFoundPage() {

    return (
        <div className={styles.notFound}>
            <h1>404 — Страница не найдена</h1>
            <p>Запрошенный маршрут не существует.</p>
        </div>
    );
}

export default NotFoundPage
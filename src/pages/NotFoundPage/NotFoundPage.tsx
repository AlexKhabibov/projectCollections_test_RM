import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {

    return (
        <div className={styles.page}>

            <div className={styles.card}>

                <span className={styles.code}>
                    404
                </span>

                <h1 className={styles.title}>
                    Страница не найдена
                </h1>

                <p className={styles.description}>
                    Возможно, ссылка устарела
                    или страница была удалена.
                </p>

                <Link
                    to="/"
                    className={styles.button}
                >
                    Вернуться на главную
                </Link>

            </div>

        </div>
    );
}

export default NotFoundPage;
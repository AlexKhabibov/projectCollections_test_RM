import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__inner}`}>
                <nav className={styles.header__nav}>
                    <Link to='/' className={styles.header__logo}>Yeahub</Link>
                    <Link to='questions' className={styles.header__link}>База вопросов</Link>
                    <a className={styles.header__link}>Тренажер</a>
                    <a className={styles.header__link}>Материалы</a>
                    <a className={styles.header__link}>Навыки (hh)</a>
                </nav>
                <div className={styles.header__actions}>
                    <button className={`${styles.btn} ${styles['btn--ghost']}`}>Вход</button>
                    <button className={`${styles.btn} ${styles['btn--primary']}`}>Регистрация</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
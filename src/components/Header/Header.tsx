import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__inner}`}>
                <nav className={styles.header__nav}>
                    <a className={styles.header__logo}>Yeahub</a>
                    <a className={styles.header__link}>База вопросов</a>
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
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { motion } from 'framer-motion';

function Header() {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__inner}`}>
                <nav className={styles.header__nav}>
                    <a className={styles.header__logo}>Yeahub</a>
                    <Link to='/' className={styles.header__link}>База вопросов</Link>
                    <a className={styles.header__link}>Тренажер</a>
                    <a className={styles.header__link}>Материалы</a>
                    <a className={styles.header__link}>Навыки (hh)</a>
                </nav>
                <div className={styles.header__actions}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${styles.btn} ${styles['btn--ghost']}`}
                    >
                        Вход
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${styles.btn} ${styles['btn--primary']}`}
                    >
                        Регистрация
                    </motion.button>
                </div>
            </div>
        </header>
    );
}

export default Header;
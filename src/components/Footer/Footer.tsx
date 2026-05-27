import styles from "./Footer.module.css";
import { FaTelegram, FaYoutube, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>


                <div className={styles.top}>
                    <h2 className={styles.logo}>
                        Yeahub
                    </h2>

                    <p className={styles.title}>
                        Выбери, каким будет IT завтра, вместе с нами
                    </p>

                    <p className={styles.description}>
                        YeaHub — это полностью открытый проект,
                        призванный объединить и улучшить IT-сферу.
                    </p>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>

                    <div className={styles.links}>
                        <span>© 2024 YeaHub</span>

                        <a href="#">
                            Документы
                        </a>
                    </div>

                    <div className={styles.socials}>
                        <span>
                            Ищите нас в соцсетях
                        </span>

                        <div className={styles.icons}>
                            <a href="#"><FaTelegram /></a>
                            <a href="#"><FaYoutube /></a>
                            <a href="#"><FaGithub /></a>
                        </div>
                    </div>

                </div>


            </div>

        </footer>
    );
}

export default Footer;
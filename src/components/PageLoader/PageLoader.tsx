import styles from './PageLoader.module.css';

function PageLoader() {

    return (
        <div className={styles.overlay}>

            <div className={styles.loader} />

        </div>
    );
}

export default PageLoader;

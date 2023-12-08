
import styles from './Background.module.scss';

export function Background() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.stars1}></div>
            <div className={styles.stars1delay}></div>
            <div className={styles.stars2}></div>
            <div className={styles.stars2delay}></div>
            <div className={styles.stars3}></div>
            <div className={styles.stars3delay}></div>
        </section>
    );
}
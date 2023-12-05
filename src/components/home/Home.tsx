
import { Blob } from '../Blob/Blob';
import styles from './Home.module.scss';

export function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.info}>
                <h1>
                    Víctor Muniz
                </h1>
                <h1>
                    Full Stack Developer
                </h1>
            </div>

            <div className={`${styles.spacer} ${styles.layer1}`}></div>
            <section>
                <div className={styles.blob}>
                    <Blob />
                </div>
                <div className={styles.blob}>
                    <Blob />
                </div>
            </section>
            <div className={`${styles.spacer} ${styles.layer2}`}></div>
        </div>
    );
}
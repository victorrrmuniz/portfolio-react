
import styles from './Home.module.scss';

export function Home() {
    return (
        <div className={styles.homeContainer}>
            <h1>
                Olá, me chamo<br />
                <strong>Víctor Muniz </strong>
                e sou desenvolvedor full stack
            </h1>

        </div>
    );
}
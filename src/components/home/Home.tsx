
import { Background } from '../background/Background';
import { Nav } from '../nav/Nav';
import styles from './Home.module.scss';

export function Home() {


    return (
        <div className={styles.homeContainer}>
            <section className={styles.contentContainer}>
                <Nav />
                <Background /> 

                <div className={styles.title}>
                    <span>VÍCTOR MUNIZ</span>
                    <span>DESENVOLVEDOR FULLSTACK</span>
                </div>
            </section>
        </div>
    );
}
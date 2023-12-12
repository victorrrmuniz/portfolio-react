
import { Background } from '../background/Background';
import { Nav } from '../nav/Nav';
import styles from './Projects.module.scss';

export function Projects() {
    return(
        <div className={styles.projectsContainer}>
            <div className={styles.contentContainer}>
                <section>
                    <Background /> 
                    <Nav />
                </section>
                <div>
                    <h1>Projetos</h1>
                    <div>
                        <div>
                            <h1>Em breve!</h1>
                        </div>
                        <div>
                            <h1>Em breve!</h1>
                        </div>
                        <div>
                            <h1>Em breve!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
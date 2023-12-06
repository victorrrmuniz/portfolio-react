
import { Contact } from '../contact/Contact';
import { Nav } from '../nav/Nav';
import styles from './Home.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCoffee, 
    faFilm, 
    faHeadphones, 
    faBook,
    faVideo,
    faGamepad,
    faGlobe,
    faComputer,
    faDesktop,
    faLightbulb,
    faPuzzlePiece,
    faKeyboard,
    faCodeBranch,
    faWaterLadder,
    faVolumeHigh,
    faUtensils,
    faUserGraduate,
    faPodcast,
    faPizzaSlice
} from '@fortawesome/free-solid-svg-icons';

export function Home() {
    return (
        <>
            {/* <div className={styles.homeContainer}>
                <section className={styles.mainSection}>
                    <div className={styles.info}>
                        <h1>
                            Víctor Muniz
                        </h1>
                        <h1>
                            Full Stack Developer
                        </h1>
                    </div>
                </section>
                <div className={`${styles.spacer} ${styles.layer2}`}></div>

                <section className={styles.nav}>
                    <Nav />
                </section>
            </div> */}

            <section className={styles.iconsSection}>
                <div className={styles.iconsRow}>
                    <div>
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faFilm} />
                        <FontAwesomeIcon icon={faHeadphones} />
                        <FontAwesomeIcon icon={faBook} />
                        <FontAwesomeIcon icon={faVideo} />
                        <FontAwesomeIcon icon={faGamepad} />
                        <FontAwesomeIcon icon={faGlobe} />
                        <FontAwesomeIcon icon={faComputer} />
                        <FontAwesomeIcon icon={faDesktop} />
                        <FontAwesomeIcon icon={faLightbulb} />
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        <FontAwesomeIcon icon={faKeyboard} />
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <FontAwesomeIcon icon={faWaterLadder} />
                        <FontAwesomeIcon icon={faVolumeHigh} />
                        <FontAwesomeIcon icon={faUtensils} />
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <FontAwesomeIcon icon={faPodcast} />
                        <FontAwesomeIcon icon={faPizzaSlice} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faFilm} />
                        <FontAwesomeIcon icon={faHeadphones} />
                        <FontAwesomeIcon icon={faBook} />
                        <FontAwesomeIcon icon={faVideo} />
                        <FontAwesomeIcon icon={faGamepad} />
                        <FontAwesomeIcon icon={faGlobe} />
                        <FontAwesomeIcon icon={faComputer} />
                        <FontAwesomeIcon icon={faDesktop} />
                        <FontAwesomeIcon icon={faLightbulb} />
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        <FontAwesomeIcon icon={faKeyboard} />
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <FontAwesomeIcon icon={faWaterLadder} />
                        <FontAwesomeIcon icon={faVolumeHigh} />
                        <FontAwesomeIcon icon={faUtensils} />
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <FontAwesomeIcon icon={faPodcast} />
                        <FontAwesomeIcon icon={faPizzaSlice} />
                    </div>
                </div>

                <div className={styles.iconsRow}>
                    <div>
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faFilm} />
                        <FontAwesomeIcon icon={faHeadphones} />
                        <FontAwesomeIcon icon={faBook} />
                        <FontAwesomeIcon icon={faVideo} />
                        <FontAwesomeIcon icon={faGamepad} />
                        <FontAwesomeIcon icon={faGlobe} />
                        <FontAwesomeIcon icon={faComputer} />
                        <FontAwesomeIcon icon={faDesktop} />
                        <FontAwesomeIcon icon={faLightbulb} />
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        <FontAwesomeIcon icon={faKeyboard} />
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <FontAwesomeIcon icon={faWaterLadder} />
                        <FontAwesomeIcon icon={faVolumeHigh} />
                        <FontAwesomeIcon icon={faUtensils} />
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <FontAwesomeIcon icon={faPodcast} />
                        <FontAwesomeIcon icon={faPizzaSlice} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faFilm} />
                        <FontAwesomeIcon icon={faHeadphones} />
                        <FontAwesomeIcon icon={faBook} />
                        <FontAwesomeIcon icon={faVideo} />
                        <FontAwesomeIcon icon={faGamepad} />
                        <FontAwesomeIcon icon={faGlobe} />
                        <FontAwesomeIcon icon={faComputer} />
                        <FontAwesomeIcon icon={faDesktop} />
                        <FontAwesomeIcon icon={faLightbulb} />
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        <FontAwesomeIcon icon={faKeyboard} />
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <FontAwesomeIcon icon={faWaterLadder} />
                        <FontAwesomeIcon icon={faVolumeHigh} />
                        <FontAwesomeIcon icon={faUtensils} />
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <FontAwesomeIcon icon={faPodcast} />
                        <FontAwesomeIcon icon={faPizzaSlice} />
                    </div>
                </div>
                <div className={styles.iconsRow}>
                    <div>
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faFilm} />
                        <FontAwesomeIcon icon={faHeadphones} />
                        <FontAwesomeIcon icon={faBook} />
                        <FontAwesomeIcon icon={faVideo} />
                        <FontAwesomeIcon icon={faGamepad} />
                        <FontAwesomeIcon icon={faGlobe} />
                        <FontAwesomeIcon icon={faComputer} />
                        <FontAwesomeIcon icon={faDesktop} />
                        <FontAwesomeIcon icon={faLightbulb} />
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        <FontAwesomeIcon icon={faKeyboard} />
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <FontAwesomeIcon icon={faWaterLadder} />
                        <FontAwesomeIcon icon={faVolumeHigh} />
                        <FontAwesomeIcon icon={faUtensils} />
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <FontAwesomeIcon icon={faPodcast} />
                        <FontAwesomeIcon icon={faPizzaSlice} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faFilm} />
                        <FontAwesomeIcon icon={faHeadphones} />
                        <FontAwesomeIcon icon={faBook} />
                        <FontAwesomeIcon icon={faVideo} />
                        <FontAwesomeIcon icon={faGamepad} />
                        <FontAwesomeIcon icon={faGlobe} />
                        <FontAwesomeIcon icon={faComputer} />
                        <FontAwesomeIcon icon={faDesktop} />
                        <FontAwesomeIcon icon={faLightbulb} />
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        <FontAwesomeIcon icon={faKeyboard} />
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <FontAwesomeIcon icon={faWaterLadder} />
                        <FontAwesomeIcon icon={faVolumeHigh} />
                        <FontAwesomeIcon icon={faUtensils} />
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <FontAwesomeIcon icon={faPodcast} />
                        <FontAwesomeIcon icon={faPizzaSlice} />
                    </div>
                </div>
                <div className={styles.iconsRow}>
                    <div>
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faFilm} />
                        <FontAwesomeIcon icon={faHeadphones} />
                        <FontAwesomeIcon icon={faBook} />
                        <FontAwesomeIcon icon={faVideo} />
                        <FontAwesomeIcon icon={faGamepad} />
                        <FontAwesomeIcon icon={faGlobe} />
                        <FontAwesomeIcon icon={faComputer} />
                        <FontAwesomeIcon icon={faDesktop} />
                        <FontAwesomeIcon icon={faLightbulb} />
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        <FontAwesomeIcon icon={faKeyboard} />
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <FontAwesomeIcon icon={faWaterLadder} />
                        <FontAwesomeIcon icon={faVolumeHigh} />
                        <FontAwesomeIcon icon={faUtensils} />
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <FontAwesomeIcon icon={faPodcast} />
                        <FontAwesomeIcon icon={faPizzaSlice} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faFilm} />
                        <FontAwesomeIcon icon={faHeadphones} />
                        <FontAwesomeIcon icon={faBook} />
                        <FontAwesomeIcon icon={faVideo} />
                        <FontAwesomeIcon icon={faGamepad} />
                        <FontAwesomeIcon icon={faGlobe} />
                        <FontAwesomeIcon icon={faComputer} />
                        <FontAwesomeIcon icon={faDesktop} />
                        <FontAwesomeIcon icon={faLightbulb} />
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        <FontAwesomeIcon icon={faKeyboard} />
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <FontAwesomeIcon icon={faWaterLadder} />
                        <FontAwesomeIcon icon={faVolumeHigh} />
                        <FontAwesomeIcon icon={faUtensils} />
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <FontAwesomeIcon icon={faPodcast} />
                        <FontAwesomeIcon icon={faPizzaSlice} />
                    </div>
                </div>
            </section>

            
            <Contact />
        </>
    );
}
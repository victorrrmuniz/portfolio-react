
import { useEffect, useRef } from 'react';
import styles from './Contact.module.scss';
import VanillaTilt from 'vanilla-tilt';

export function Contact() {

    const options = {
        speed: 700,
    }
    const tilt1 = useRef(null);
    const tilt2 = useRef(null);
    const tilt3 = useRef(null);

    useEffect(() => {
        if (tilt1.current)
            VanillaTilt.init(tilt1.current, options)
        if (tilt2.current)
            VanillaTilt.init(tilt2.current, options)
        if (tilt3.current)
            VanillaTilt.init(tilt3.current, options)
    }, [options]);

        
    return (
        <div className={styles.contactContainer}>
            <section className={styles.contentContainer}>
                <div>
                    <h1>Entre em contato!</h1>
                </div>

                <div ref ={tilt1}>
                    <img src="/src/assets/gmail.svg" alt="Gmail" />
                    <p>victorrmunizz@gmail.com</p>
                </div>
                
                <div ref ={tilt2}>
                    <img src="/src/assets/github.svg" alt="Github" />
                    <p>victorrrmuniz</p>
                </div>
                <div ref ={tilt3}>
                    <img src="/src/assets/linkedin.svg" alt="Linkedin" />
                    <p>victormunizz</p>
                </div>
            </section>
        </div>
    )
}
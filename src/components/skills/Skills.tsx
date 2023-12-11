
import { Background } from '../background/Background';
import { Nav } from '../nav/Nav';
import styles from './Skills.module.scss';

export function Skills() {
    return (
        <div className={styles.skillsContainer}>
            <div className={styles.contentContainer}>
                <section>
                    <Background /> 
                    <Nav />
                </section>
                <div>
                    <div>
                        <h1>Habilidades</h1>
                    </div>
                    <ul>
                        <li>
                            <span className={styles.skillImages}>
                                <span>
                                    <img src="/src/assets/netcore.svg" />
                                    <img src="/src/assets/csharp.svg" />
                                </span>
                            </span>
                            <span className={styles.skillContent}>
                                A minha primeira linguagem de programação foi C#, introduzida durante o curso técnico em informática integrado
                                ao ensino médio no Instituto Federal de São Paulo em 2011. Desde então, tenho continuamente aprimorado minhas
                                habilidades nesta linguagem, mantendo-me atualizado com as últimas versões. Com experiência profissional desde 2019,
                                a maioria das minhas experiências profissionais tem sido centrada na plataforma .NET Core, utilizando C#, 
                                o que solidificou meu conhecimento nessa tecnologia.
                            </span>
                        </li>
                        <li>
                            <span className={styles.skillContent}>
                                Minha jornada no desenvolvimento web também teve início durante meu ensino técnico, e desde então, tenho continuamente 
                                empregado essas tecnologias ao longo de toda a minha trajetória profissional. Esse percurso contribuiu significativamente 
                                para a consolidação de uma base sólida nessas tecnologias.
                            </span>
                            <span className={styles.skillImages}>
                                <span>
                                    <img src="/src/assets/html.svg" />
                                    <img src="/src/assets/css.svg" />
                                </span>
                                <span>
                                    <img src="/src/assets/javascript.svg" />
                                    <img src="/src/assets/sass.svg" />
                                </span>
                            </span>
                        </li>
                        <li>
                            <span className={styles.skillImages}>
                                <span>
                                    <img src="/src/assets/angular.svg" />
                                </span>
                            </span>

                            <span className={styles.skillContent}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta obcaecati vel assumenda illo sit iusto, repellendus aut sequi odio non nulla deleniti alias. Sunt saepe quos quo quae ut.
                            </span>
                        </li>
                        <li>
                            <span className={styles.skillContent}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta obcaecati vel assumenda illo sit iusto, repellendus aut sequi odio non nulla deleniti alias. Sunt saepe quos quo quae ut.
                            </span>
                            <span className={styles.skillImages}>
                                <span>
                                    <img src="/src/assets/postgresql.svg" />
                                    <img src="/src/assets/sqlserver.svg" />
                                </span>
                            </span>
                        </li>
                        <li>
                            <span className={styles.skillImages}>
                                <span>
                                    <img src="/src/assets/nodejs.svg" />
                                    <img src="/src/assets/react.svg" />
                                </span>
                            </span>
                            <span className={styles.skillContent}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta obcaecati vel assumenda illo sit iusto, repellendus aut sequi odio non nulla deleniti alias. Sunt saepe quos quo quae ut.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
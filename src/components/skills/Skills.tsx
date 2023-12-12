
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
                                Meu primeiro contato na programação ocorreu com a linguagem C#, durante o curso técnico em informática 
                                integrado ao ensino médio no Instituto Federal de São Paulo, no ano de 2011. Desde então, tenho dedicado 
                                esforços contínuos para aprimorar minhas habilidades nessa linguagem, acompanhando de perto as mais recentes atualizações.
                                Com uma trajetória profissional que teve início em 2019, a maior parte das minhas experiências tem se concentrado na 
                                plataforma .NET Core, utilizando C#. Essa vivência tem desempenhado um papel fundamental no fortalecimento e aprofundamento 
                                do meu conhecimento nessa tecnologia. Estou comprometido em manter-me atualizado com as últimas tendências e 
                                práticas, garantindo assim que minha expertise esteja alinhada com as demandas do setor.
                            </span>
                        </li>
                        <li>
                            <span className={styles.skillContent}>
                                Minha jornada no desenvolvimento web começou durante o ensino técnico, e desde então, tenho consistentemente 
                                aplicado essas tecnologias ao longo de toda a minha carreira profissional. Essa trajetória desempenhou um papel 
                                crucial na consolidação de uma base sólida nos meus conhecimentos de desenvolvimento web, 
                                proporcionando-me expertise prática e conhecimento aprofundado.
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
                                Conto com quatro anos de experiência na construção de Single Page Applications (SPAs) utilizando o 
                                framework Angular. Certamente, é o framework frontend no qual possuo maior proficiência. Minhas habilidades 
                                incluem o domínio de ferramentas como RxJs, NgRx e a realização de testes unitários com Jasmine, entre outras 
                                competências relacionadas. Essa bagagem técnica tem contribuído significativamente para a eficácia e qualidade 
                                dos projetos em que tenho trabalhado.
                            </span>
                        </li>
                        <li>
                            <span className={styles.skillContent}>
                                Desde os meus primeiros envolvimentos com a computação, estabeleci um contato profissional 
                                constante com bancos de dados relacionais, experiência essa que foi se aprimorando ao longo de minha 
                                trajetória profissional. Apesar de possuir conhecimentos em diversos sistemas de gerenciamento de bancos de dados, 
                                minha especialização concentra-se principalmente no PostgreSQL e no Microsoft SQL Server
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
                                <img src="/src/assets/nextjs.svg" />

                                    <img src="/src/assets/react.svg" />
                                </span>
                                <span>
                                <img src="/src/assets/nodejs.svg" />

                                </span>
                            </span>
                            <span className={styles.skillContent}>
                                Embora minha experiência profissional com React seja relativamente breve, tenho demonstrado agilidade 
                                em me adaptar às tecnologias em demanda no mercado. Atualmente, tenho direcionado meus estudos para 
                                aprofundar meu conhecimento em React, explorando também as possibilidades oferecidas pelo Next.js e 
                                Node.js. Este foco em constante aprendizado reflete meu compromisso em acompanhar as últimas tendências 
                                e aprimorar minhas habilidades para contribuir de maneira sólida em projetos envolvendo essas tecnologias.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
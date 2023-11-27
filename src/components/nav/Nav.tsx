
import styles from './Nav.module.scss';

export function Nav() {
    return (
        <div className={styles.navContainer}>
            <span>Página inicial</span>
            <span>Habilidades</span>
            <span>Projetos</span>
            <span>Contato</span>
        </div>
    )
}
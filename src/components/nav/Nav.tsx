
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

export function Nav() {
    return (
        <nav className={styles.navContainer}>
            <ul>
                <li><NavLink to='/'>Página inicial</NavLink></li>
                <li><NavLink to='/skills'>Habilidades</NavLink></li>
                <li><NavLink to='/projects'>Projetos</NavLink></li>
                <li><NavLink to='/contact'>Contato</NavLink></li>
            </ul>
        </nav>
    )
}
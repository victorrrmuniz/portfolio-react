
import styles from './Skills.module.scss';

export function Skills() {
    return (
        <div className={styles.skillsContainer}>
            <h1>Habilidades</h1>
            <ul>
                <li>.Net Core</li>
                <li>C#</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Angular</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>SASS</li>
            </ul>
        </div>
    )
}
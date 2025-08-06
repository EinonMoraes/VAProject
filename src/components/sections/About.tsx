import styles from './About.module.css'
import sacada2 from '../../assets/imgs/sacada2.jpg'

export function About() {
    return (
        <>
        <header className={styles.header}>
            <h1>QUEM SOMOS</h1>
        </header>
        <div className={styles.backgroundContainer}>
            <div className={styles.backgroundImage}></div>
            <img src={sacada2} className={styles.sacada}/>
        </div>
        </>
    );
}
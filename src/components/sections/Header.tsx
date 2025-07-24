import styles from './Header.module.css'

import vaLogo from '../../assets/imgs/va-logo.svg'

export function Header( ) {
    return (
        <header className={styles.header}>
            <img 
                className={styles.headerLogo} 
                src={vaLogo}
                alt='V&A Logo'
            />
            <nav className={styles.buttonContainer}>
                <button className={styles.button}>HOME</button>
                <button className={styles.button}>QUEM SOMOS</button>
                <button className={styles.button}>SERVIÇOS</button>
                <button className={styles.button}>CONTATO</button>
            </nav>
        </header>
    )
}
import styles from './About.module.css'
import sacada2 from '../../assets/imgs/sacada2.jpg'
import { AboutCard, BenefitCard } from '../UI/Cards';
import { LiaCoinsSolid } from "react-icons/lia"
import { RiCheckDoubleFill } from 'react-icons/ri';
import { FaHandshake } from 'react-icons/fa';

export function About() {
    return (
        <>
        <header className={styles.header}>
            <h1>QUEM SOMOS</h1>
        </header>
        <div className={styles.backgroundContainer}>
            <div className={styles.backgroundImage}></div>
            <img src={sacada2} className={styles.sacada}/>
            <div className={styles.card1}>    
                <AboutCard    
                    title="Nossa História"
                    description= 'Fundada em 2023, a Sacada Bar e Restaurante nasceu do sonho de criar um espaço onde amigos e familiares pudessem se reunir para desfrutar de boa comida, música ao vivo e momentos inesquecíveis. Localizado no coração da cidade, nosso estabelecimento rapidamente se tornou um ponto de encontro popular, conhecido por sua atmosfera acolhedora e vibrante.'
                />
                <div className={styles.card2}>
                    <BenefitCard
                        IconComponent={LiaCoinsSolid}
                        title="L0REM IPSUM"
                        description='Lorem ipsum dolor sit ametLorem ipsum dolor sit amet'                      
                    />
                    <BenefitCard
                        IconComponent={FaHandshake}
                        title="L0REM IPSUM"
                        description='Lorem ipsum dolor sit ametLorem ipsum dolor sit amet'
                    />
                    <BenefitCard
                        IconComponent={RiCheckDoubleFill}
                        title="L0REM IPSUM"
                        description='Lorem ipsum dolor sit ametLorem ipsum dolor sit amet'
                        
                    />
                </div>
            </div> 
        </div>
        </>
    );
}
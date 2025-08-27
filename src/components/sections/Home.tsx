import styles from './Home.module.css'
import heroImg from '../../assets/imgs/heroImg.jpg'

export function Home () {
   return (
      <div className={styles.container}>
         <img className={styles.backgroundImage} src={heroImg}/>
         <div className={styles.textOverlay}>
            <strong >V&A Vidros e Esquadrias</strong>
            <p>Soluções em vidros e esquadrias de alumínio para deixar sua casa mais bonita, segura e do seu jeito.</p>    
         </div>
      </div>
   )
}
import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import sacadaDeVidro from './assets/sacadaDeVidro.jpg'
export function App() {
  
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <img className={styles.backgroundImage} src={sacadaDeVidro}/>
        <div className={styles.textOverlay}>
          <strong >V&A Vidros e Esquadrias</strong>
          <p>Soluções em vidros e esquadrias de alumínio para deixar sua casa mais bonita, segura e do seu jeito.</p>
        </div>
      </div>
    </div>
  )
}

export default App
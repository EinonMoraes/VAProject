import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import sacadaDeVidro from './assets/sacadaDeVidro.jpg'

export function App() {
  
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <img className={styles.backgroundImage} src='https://images.unsplash.com/photo-1494884113216-952a0c2c1a30?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      </div>
    </div>
  )
}

export default App
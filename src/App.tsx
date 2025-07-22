import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Home } from './components/Home'

export function App() {
  
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  )
}

export default App
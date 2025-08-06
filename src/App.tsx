import './global.css'
// import styles from './App.module.css'
import { Header } from './components/sections/Header'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'

export function App() {
  
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
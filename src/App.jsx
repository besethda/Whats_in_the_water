import { useState } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import Tank from './components/Tank'
import TankChoices from './components/tankChoices'
import styles from "./App.module.css"

function App() {

  const [tankOption, setTankOption] = useState(null)
  const [tankChoices, setTankChoices] = useState(null)
  const [tankCondition, setTankCondition] = useState({ph: 7, ammonia: 0, nO:0, nH: 0, n:0, k:0, temperature: 21, })

  return (
    <div className={styles.container}>
      <Header tankChoices={tankChoices}/>
      {!tankOption ? <Tank setTankOption={setTankOption}/> : 
        !tankChoices ? <TankChoices tankOption={tankOption} setTankChoices={setTankChoices}/> :
        <Content tankOption={tankOption}/>}
      <Footer />
    </div>
  )
}

export default App

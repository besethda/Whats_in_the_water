import { useState } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import Tank from './components/Tank'
import TankChoices from './components/TankChoices'
import styles from "./App.module.css"

function App() {

  const [tankOption, setTankOption] = useState(null)
  const [tankChoices, setTankChoices] = useState(null)
  const [tankCondition, setTankCondition] = useState({ph: 7, ammonia: 0, nO:0, nH: 0, n:0, k:0, temperature: 24, light: 5, algae: 0})
  const [inhabitants, setInhabitants] = useState([])
  const [tankSize, setTankSize] = useState(null)

  return (
    <div className={styles.container}>
      <Header tankChoices={tankChoices} setInhabitants={setInhabitants} inhabitants={inhabitants}/>
      {!tankOption ? <Tank setTankOption={setTankOption}/> : 
        !tankChoices ? <TankChoices tankOption={tankOption} setTankChoices={setTankChoices} setTankSize={setTankSize} tankSize={tankSize}/> :
        <Content tankOption={tankOption} tankCondition={tankCondition} setTankCondition={setTankCondition} setInhabitants={setInhabitants} inhabitants={inhabitants} tankSize={tankSize}/>}
      <Footer />
    </div>
  )
}

export default App

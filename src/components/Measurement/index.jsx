import styles from "./measurement.module.css"
import Capacity from "../svgs/Capacity"
import Algae from "../svgs/Algae"
import Light from "../svgs/Light"
import Temperature from "../svgs/Temperature"

const Measurement = ({name, data, type, setTankCondition, tankCondition}) => {

  const changeTankSettings = (e) => {
    if(tankCondition[type] !== e.target.value) {
      setTankCondition(
        {...tankCondition, [type]: Number(e.target.value)}
      )
    }
  }

  return (
    <div className={styles.container}>
      {name ? null : type === "temperature" ? <Temperature /> : type === "light" ? <Light /> : type === "algae" ? <Algae/> : type === "capacity" ? <Capacity /> : null}
      {name && <div className={styles.name}>{name}</div>}
      {type && type !== "capacity" && type !== "algae"
      ? <div className={styles.input}><input onChange={(e)=> {changeTankSettings(e)}} value={tankCondition[type]} className={`${styles.data} ${type === "ph" && styles.phData}`}/> <span className={`${type === "ph" ? styles.phSpan: styles.dataSpan}`}>{type=== "light" ? "hrs" : type === "temperature" ? "°C" : ""}</span></div>
      : <div className={styles.dataText}>{data}{type === "capacity" ? "L" : type === "algae" ? "%" : ""}</div>}
    </div>
  )
}

export default Measurement;
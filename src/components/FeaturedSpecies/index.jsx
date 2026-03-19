import styles from "./featuredspecies.module.css"
import { getLoneliness, getPhHealth, getTemperatureHealth, getLightLevelHealth, getLeftovers } from "../../../utils/functions"

const FeaturedSpecies = ({ featuredSpecies, setFeaturedSpecies, tankCondition, inhabitants, crowded }) => {

  let type = featuredSpecies.type === "fish" ? "fish" : featuredSpecies.type === "shrimp" ? "shrimp" : "plant"

  let nitrate = getLeftovers(inhabitants)
  let tempHealth = getTemperatureHealth(featuredSpecies, tankCondition)
  let phHealth = getPhHealth(featuredSpecies, tankCondition)
  let lightHealth = (type === "plant" ? getLightLevelHealth(featuredSpecies, tankCondition) : null)
  let nitrateDanger = nitrate > 0 ? "high" : "healthy"
  let loneliness = inhabitants ? type !== "plant" ? getLoneliness(inhabitants, featuredSpecies) : "healthy" : null

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.top}>
          <div className={styles.title}>{featuredSpecies.name}</div>
          <svg onClick={() => { setFeaturedSpecies(null) }} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fillOpacity=".01" /><path d="M8 8 40 40" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 40 40 8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.health}>
        {type !== "plant" && <div className={`${styles.measure} ${nitrateDanger && styles[nitrateDanger]}`}>N</div>}
        <div className={`${styles.measure} ${phHealth && styles[phHealth]}`}>PH</div>
        <div className={`${styles.measure} ${tempHealth && styles[tempHealth]}`}>C&deg;</div>
        {type !== "plant" && <div className={`${styles.measure} ${loneliness && styles[loneliness]}`}>{loneliness === "high" ? "aggressive" : loneliness === "low" ? "lonely" : "social"}</div>}
        {lightHealth && <div className={`${styles.measure} ${styles[lightHealth]}`}>light</div>}
        {type !== "plant" && <div className={`${styles.measure} ${crowded && styles[crowded]}`}>{crowded === "high" ? "crowded" : "spacious"}</div>}
      </div>
      <div className={styles.info}>
        <div className={styles.data}>Size: {featuredSpecies.sizeRange.join("-")}cm</div>
        <div className={styles.data}>Water: {featuredSpecies.water}</div>
        {featuredSpecies.lightHours && <div className={styles.data}>Hours of light: {featuredSpecies.lightHours.join("-")}hrs</div>}
        {featuredSpecies.food && <div className={styles.data}>Food: {featuredSpecies.food.join(", ")}</div>}
        {featuredSpecies.lightLevel && <div className={styles.data}>Light: {featuredSpecies.lightLevel}</div>}
        {featuredSpecies.spaceRange && <div className={styles.data}>Space needed: ~{featuredSpecies.spaceRange.join("-")}L</div>}
        <div className={styles.data}>Temperature: ~{featuredSpecies.temperatureRange.join("-")}°C</div>
        <div className={styles.data}>PH: ~{featuredSpecies.phRange.join("-")}</div>
        {featuredSpecies.groupRange && <div className={styles.data}>Some fish become territorial with other fish of their kind. Others are lonely without fish friends! The {featuredSpecies.name} needs: ~{featuredSpecies.groupRange.join("-")} friends</div>}
        {featuredSpecies.nRange && <div className={styles.data}>Minimum nutrients: <br /> N: {featuredSpecies.nRange[0]}, K: {featuredSpecies.kRange[0]}, P: {featuredSpecies.pRange[0]}</div>}
        <div className={styles.data}><br />{featuredSpecies.behavior}</div>
      </div>
    </div>
  )
}

export default FeaturedSpecies
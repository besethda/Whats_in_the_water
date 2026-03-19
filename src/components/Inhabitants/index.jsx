import styles from "./inhabitants.module.css"
import SpeciesCard from "../SpeciesCard"

const Inhabitants = ({inhabitants, setFeaturedSpecies}) => {

  const fish = inhabitants.filter(e=> e.type === "fish")
  const shrimp = inhabitants.filter(e=> e.type === "shrimp")
  const plants = inhabitants.filter(e=> e.type !== "shrimp" && e.type !== "fish")


  return (
    <div className={styles.container}>
      <div className={styles.creatures}>
        <div className={`${styles.head} ${styles.head1}`}>
          <div className={styles.title}>Fish</div>
          <div className={styles.line}></div>
        </div>
        {fish && fish.map((e, i)=> <SpeciesCard key={i} creature={e} type={"fish"} setFeaturedSpecies={setFeaturedSpecies}/>)}
        <div className={`${styles.head} ${styles.head2}`}>
          <div className={styles.title}>Shrimp</div>
          <div className={styles.line}></div>
        </div>
        {shrimp && shrimp.map((e, i)=> <SpeciesCard key={i} creature={e} type={"shrimp"} setFeaturedSpecies={setFeaturedSpecies} />)}
        <div className={`${styles.head} ${styles.head3}`}>
          <div className={styles.title}>Plants</div>
          <div className={styles.line}></div>
        </div>
        {plants && plants.map((e, i)=> <SpeciesCard key={i} creature={e} type={"plant"} setFeaturedSpecies={setFeaturedSpecies} />)}
      </div>
    </div>
  )
}

export default Inhabitants
import { useState } from "react";
import styles from "./content.module.css"
import { getImageURL, getAlgaeChances, getLeftovers, getCrowdingStatus, getMaxCapacity } from "../../../utils/functions";
import AquariumComponent from "../AquariumComponent";
import Measurement from "../Measurement";
import Inhabitants from "../Inhabitants";
import FeaturedSpecies from "../FeaturedSpecies";

const Content = ({ tankOption, tankCondition, setTankCondition, inhabitants, setInhabitants, tankSize }) => {
  const removeSpecies = (currentId) => {
    let filteredInhabitants = inhabitants.filter(e=> e.id !== currentId)
    setInhabitants(filteredInhabitants)
  }

  const [featuredSpecies, setFeaturedSpecies] = useState(null)
  let algaeChance = getAlgaeChances(inhabitants, tankCondition)
  let nitrateLevel = getLeftovers(inhabitants)
  let crowded = getCrowdingStatus(inhabitants, tankSize)
  let maxCapacity = getMaxCapacity(inhabitants) == null ? 0 : getMaxCapacity(inhabitants)

  return (
    <div className={styles.container}>
      <div className={styles.thing}>
        {featuredSpecies ? <FeaturedSpecies crowded={crowded} inhabitants={inhabitants} tankCondition={tankCondition} featuredSpecies={featuredSpecies} setFeaturedSpecies={setFeaturedSpecies}/> : <Inhabitants inhabitants={inhabitants} setFeaturedSpecies={setFeaturedSpecies}/>}
      </div>
      <div className={styles.aquarium}>
        <img className={styles.image} src={tankOption === "square" ? `${getImageURL('aquarium2.png')}` : `${getImageURL('aquarium.png')}`} />
        <div className={`${styles.addContainer} ${tankOption === "square" ? styles.square : styles.round}`}>
          {inhabitants && inhabitants.map((e, i)=> <AquariumComponent type={e.type ? e.type === "fish" ? "fish" : "shrimp" : "plant"} key={e.id} info={e} remove={removeSpecies} setFeaturedSpecies={setFeaturedSpecies} featuredSpecies={featuredSpecies} tankCondition={tankCondition} crowded={crowded} nitrate={nitrateLevel} inhabitants={inhabitants} tankOption={tankOption} /> )}
        </div>
      </div>
      <div className={styles.dataDiv}>
        <div className={styles.stats}>
          <div className={styles.basics}>
            <Measurement name={null} type={"temperature"} data={`${tankCondition.temperature}`} setTankCondition={setTankCondition} tankCondition={tankCondition} />
            <Measurement name={null} type={"light"} data={`${tankCondition.light}`} setTankCondition={setTankCondition} tankCondition={tankCondition} />
          </div>
          <div className={styles.dataContainer}>
            <Measurement name={null} type={"algae"} data={`${algaeChance}`} setTankCondition={setTankCondition} tankCondition={tankCondition} />
            <Measurement name={null} type={"capacity"} data={`${maxCapacity}/${tankSize}`} setTankCondition={setTankCondition} tankCondition={tankCondition} />
          </div>
          <div className={styles.dataContainer}>
          <Measurement name={"ph"} type={"ph"} data={tankCondition.ph} setTankCondition={setTankCondition} tankCondition={tankCondition} />
          <Measurement name={"nit"} type={null} data={nitrateLevel} setTankCondition={setTankCondition} tankCondition={tankCondition} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
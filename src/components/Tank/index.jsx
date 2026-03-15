import styles from "./tank.module.css"
import { getImageURL } from "../../../utils/functions";

const Tank = ({setTankOption}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Choose a tank type:</div>
      <div className={styles.options}>
        <img onClick={()=> setTankOption("square")} className={styles.imgOption} src={`${getImageURL("aquarium2.png")}`}/>
        <img onClick={()=> setTankOption("round")} className={styles.imgOption} src={`${getImageURL("aquarium.png")}`}/>
      </div>
    </div>
  );
};

export default Tank;
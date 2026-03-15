import styles from "./content.module.css"
import Measurement from "../Measurement"
import { getImageURL } from "../../../utils/functions";

const Content = ({tankOption}) => {
  return (
    <div className={styles.container}>
      <div className={styles.measurements}>
        <Measurement />
      </div>
      <div className={styles.aquarium}>
        <img className={styles.image} src={tankOption === "square" ? `${getImageURL('aquarium2.png')}` : `${getImageURL('aquarium.png')}`} />
      </div>
      <div></div>
    </div>
  );
};

export default Content;
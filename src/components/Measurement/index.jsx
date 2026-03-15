import styles from "./measurement.module.css"
import { getImageURL } from "../../../utils/functions";

const Measurement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.name}>PH:</div>
        <div className={styles.data}>32</div>
      </div>
    </div>
  );
};

export default Measurement;
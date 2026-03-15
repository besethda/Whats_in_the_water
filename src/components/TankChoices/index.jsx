import { useState } from "react";
import styles from "./tank-choices.module.css"

const TankChoices = ({setTankChoices}) => {

  const [waterType, setWaterType] = useState(null)
  const [tankSize, setTankSize] = useState(null)

  const changeWaterType = (type) => {
    setWaterType(type)
  }

  const changeTankSize = (size) => {
    setTankSize(size)
  }

  const saveChoices = () => {
    if(!waterType || !tankSize) return
    setTankChoices({size: tankSize, water: waterType})
  }

  return (
    <div className={styles.container}>
      <div className={styles.head}>Choose a type of water:</div>
      <div className={styles.options}>
        <div className={`${styles.singleOption} ${waterType === "salt" && styles.activeType}`} onClick={()=>changeWaterType("salt")}>
          <svg viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m40.3 44c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m45.5 44c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m50.7 44c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m55.8 44c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m61 44c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m66.2 44c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.6005-1.1995-2.6005-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m40.3 50.6c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m45.5 50.6c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m50.7 50.6c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m55.8 50.6c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m61 50.6c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m66.2 50.6c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003 775e-6-2.6005-1.0994-2.6005-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m40.3 57.3c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m45.5 57.3c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m50.7 57.3c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m55.8 57.3c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m61 57.3c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.5997-1.2002-2.5997-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m66.2 57.3c0 1.4003-1.2002 2.5997-2.5997 2.5997-1.4003.0-2.6005-1.2002-2.6005-2.5997"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m68.2 21.9H32.6l-4.2 9.3002c-.60012 1.4003-.90017 2.7998-.90017 4.3v49.4h46v-49.401c0-1.5003-.30006-2.9998-.90017-4.3001z"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m32.6 16.2h35.8v5.7003H32.6z"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m40.3 69.9H61"/></g></svg>
          <div className={styles.type}>Salt</div>
        </div>
        <div className={`${styles.singleOption} ${waterType === "fresh" && styles.activeType}`} onClick={()=>changeWaterType("fresh")}>
          <svg viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m69 21.9H33.3l-4.2 9.3002c-.60012 1.4003-.90017 2.7998-.90017 4.3v49.4h46v-49.401c0-1.5003-.30006-2.9998-.90017-4.3001zm0 0" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m33.3 16.2h35.8v5.7003H33.3zm0 0" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m41 72.8h20.7" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m51.7 58v6.1996" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m51.7 64c0 2.0996-1.7003 3.9-3.9 3.9s-3.9-1.7003-3.9-3.9v-3.8" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m42 62 1.8996-2.0004L45.9 62" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m51.7 64c0 2.0996 1.7003 3.9 3.9 3.9s3.9-1.7003 3.9-3.9v-3.8" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m61.4 62-1.9004-2.0004L57.5 62" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m58.1 46.6c0-6.0996-2.3997-10.6-6.3997-10.6s-6.3997 4.5001-6.3997 10.6c0 6.0996 6.3997 11.6 6.3997 11.6-776e-6 775e-6 6.3997-5.4995 6.3997-11.6zm0 0" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><path d="m412.59 418.64c0 5.3711-8.0625 5.3711-8.0625.0.0-5.375 8.0625-5.375 8.0625.0"/><path transform="matrix(5.0381 0 0 5.0381 148.09 148.09)" d="m45.3 47.7h12.8" fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="2"/></svg>
          <div className={styles.type}>Fresh</div>
        </div>
      </div>
      <div className={styles.head}>Choose your tank size:</div>
      <div className={styles.sizeContainer}>
        <div className={`${styles.size} ${tankSize === 12 && styles.activeSize}`} onClick={()=>changeTankSize(12)} >12L</div>
        <div className={`${styles.size} ${tankSize === 27 && styles.activeSize}`} onClick={()=>changeTankSize(27)} >27L</div>
        <div className={`${styles.size} ${tankSize === 54 && styles.activeSize}`} onClick={()=>changeTankSize(54)} >54L</div>
        <div className={`${styles.size} ${tankSize === 63 && styles.activeSize}`} onClick={()=>changeTankSize(63)} >63L</div>
        <div className={`${styles.size} ${tankSize === 112 && styles.activeSize}`} onClick={()=>changeTankSize(112)} >112L</div>
        <div className={`${styles.size} ${tankSize === 180 && styles.activeSize}`} onClick={()=>changeTankSize(180)} >180L</div>
        <div className={`${styles.size} ${tankSize === 375 && styles.activeSize}`} onClick={()=>changeTankSize(375)} >375L</div>
      </div>
      <div className={styles.continue} onClick={saveChoices}>Continue</div>
    </div>
  )
}

export default TankChoices;
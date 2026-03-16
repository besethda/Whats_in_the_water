import { Dwellers, Seaplants } from "../data/data"

export const getImageURL = imageName => {
  return new URL(`../src/assets/images/${imageName}`, import.meta.url).href
}

export const filterDwellersType = (tankType) => {
  return Dwellers.filter(e=> e.water === tankType)
}

export const filterSeaplantsType = (tankType) => {
  return Seaplants.filter(e => e.water === tankType)
}

export const getBestTemperature = (tempRangeArray) => {
  tempRangeArray
}

export const getLeftovers = (currentInhabitants) => {
  let plants = currentInhabitants.filter(e => !e.waste)
  let maxNitrateUsage = 0
  let totalWaste = currentInhabitants.reduce((acc, e)=> {
    return acc + (e.waste || 0)
  }, 0)
  if(plants) {
    maxNitrateUsage = plants.reduce((acc, e)=> {
      return acc + ((e.nRange[1] + e.nRange[0])/2)
    }, 0)
  } else if(!plants) {
    return 0
  }
  let result = Math.floor(totalWaste - maxNitrateUsage)
  return result < 0 ? 0 : result
}

export const getAlgaeChances = (currentInhabitants, currentTankCondition) => {
  let risk = 0
  let leftoverWaste = getLeftovers(currentInhabitants)
  switch(leftoverWaste){
    case (leftoverWaste > 0):
      risk = 20
      break
    case (leftoverWaste >= 2):
      risk = 40
      break
    case (leftoverWaste >= 5):
      risk = 60
      break
    case (leftoverWaste >= 8):
      risk = 80
      break
    case (leftoverWaste >= 10):
      risk = 100
      break
    default:
    risk = 0
  }
  let temp = currentTankCondition.temperature
  if (temp < 17) return 0
  if (currentTankCondition.light < 6) return 0
  let final
  if (temp >= 24) {
    final = (leftoverWaste * (1+((temp-24) * .2)))
  } else {
    final = (leftoverWaste / (1+((24-temp) * .2)))
  }
  return Math.floor(final < 0 ? 0 : final)
}

export const getPhHealth = (organism, ) => {

}

export const getPlantHealth = (currentTankCondition, plant) => {
  
}
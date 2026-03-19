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

export const getTemperatureHealth = (organism, currentTankCondition) => {
  let tempRange = organism.temperatureRange
  let currentTemp = currentTankCondition.temperature
  if(currentTemp > tempRange[1]) return("high")
  if(currentTemp < tempRange[0]) return("low")
  else return 'healthy'
}

export const getLoneliness = (currentInhabitants, organism) => {
  let range = organism.groupRange
  let sameSpecies = currentInhabitants.filter(e=> e.name === organism.name)
  let matchingSpeciesCount = sameSpecies.length
  if(matchingSpeciesCount > range[1]) return "high"
  if(matchingSpeciesCount < range[0]) return "low"
  if(matchingSpeciesCount >= range[0]) return "healthy"
}

export const getPhHealth = (organism, currentTankCondition) => {
  let phRange = organism.phRange
  let currentPh = currentTankCondition.ph
  if(currentPh > phRange[1]) return("high")
  if(currentPh < phRange[0]) return("low")
  else return "healthy"
}

export const getCrowdingStatus = (currentInhabitants, tankSize) => {
  if(!currentInhabitants.length) return
  let animals = currentInhabitants.filter(e=> e.type === 'fish' || e.type === "shrimp")
  let totalCapacity = animals.reduce((acc, e)=> {
    return acc + e.spaceRange[0]
  }, 0)
  if(tankSize >= totalCapacity) return "healthy"
  if(tankSize < totalCapacity) return "high"
}

export const getMaxCapacity = (currentInhabitants) => {
  if(!currentInhabitants.length) return
  let animals = currentInhabitants.filter(e=> e.type === 'fish' || e.type === "shrimp")
  return animals.reduce((acc, e)=> {
    return acc + e.spaceRange[0]
  }, 0)
}

export const getLightLevelHealth = (organism, currentTankCondition) => {
  let neededLight = organism.lightHours
  let currentLight = currentTankCondition.light
  if(currentLight > neededLight[1]) return("high")
  if(currentLight < neededLight[0]) return("low")
  else return "healthy"
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
  let risk
  let leftoverWaste = getLeftovers(currentInhabitants)
  switch(true){
    case (leftoverWaste >= 10):
      risk = 100
      break
    case (leftoverWaste >= 8):
      risk = 80
      break
    case (leftoverWaste >= 5):
      risk = 50
      break
    case (leftoverWaste >= 2):
      risk = 40
      break
    case (leftoverWaste > 0):
      risk = 20
      break
    default:
      risk = 0
  }
  let temp = currentTankCondition.temperature
  if (temp < 17) return 0
  if (currentTankCondition.light < 6) return 0
  let final
  if (temp >= 24) {
    final = (risk * (1+((temp-24) * .2)))
  } else {
    final = (risk / (1+((24-temp) * .2)))
  }
  return Math.floor(final < 0 ? 0 : final)
}
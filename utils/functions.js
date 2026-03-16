import { Dwellers, Seaplants } from "../data/data"

export const getImageURL = imageName => {
  return new URL(`../src/assets/images/${imageName}`, import.meta.url).href
}

export const filterDwellersType = (filterBy) => {
  return Dwellers.filter(e=> Dwellers.type === filterBy)
}

export const filterSeaplants = (toFilter, filterBy) => {
  
}
function Creature (name, sizeRange, type, food, foodAmount, waste, spaceRange, temperatureRange, groupRange, phRange, water, behavior) {
  this.name = name
  this.sizeRange = sizeRange
  this.type = type
  this.food = food
  this.foodAmount = foodAmount
  this.waste = waste
  this.spaceRange = spaceRange
  this.temperatureRange = temperatureRange
  this.groupRange = groupRange
  this.phRange = phRange
  this.water = water
  this.behavior = behavior
}

function Plant (name, sizeRange, color, phRange, isRootFeeder, temperatureRange, lightRange, pRange, nRange, kRange) {
  this.name = name
  this.sizeRange = sizeRange
  this.color = color
  this.phRange = phRange
  this.isRootFeeder = isRootFeeder
  this.temperatureRange = temperatureRange
  this.lightRange = lightRange
  this.pRange = pRange
  this.nRange = nRange
  this.kRange = kRange
}

export const Dwellers = [
  new Creature("Cherry Shrimp", [2.5, 4], "shrimp", ["algae", "vegetables", "shrimp food"], .2, .2, [.5, 1], [22, 26], [1, 1000], [6.5, 8], "fresh", "Cherry Shrimp(Neocaridina davidi) are popular, hardy, freshwater dwarf shrimp ideal for planted tanks. They are active algae eaters, easy to breed, and thrive in groups within tanks 5+ gallons with stable parameters. They pair well with peaceful tank mates, such as small rasboras or Corydoras."),
  new Creature("Neon Tetra", [2, 4], "fish", ["flakes", "micro-pellets"], .5, 2, [5, 7], [22, 27], [6, 20], [6.0, 7.5], "fresh", "Peaceful schooler, needs 6+ companions"),
  new Creature("Amano Shrimp", [4, 5], "shrimp", ["algae", "detritus"], .4, .5, [10, 15], [20, 28], [1, 10], [6.5, 7.5], "fresh", "Very active, will eat almost any algae type"),
  new Creature("Panda Cory", [3, 5], "fish", ["sinking wafers", "worms"], .8, 5, [8, 10], [22, 25], [6, 12], [6.0, 7.0], "fresh", "Bottom dweller, sift sand for food")
]

export const Seaplants = [
  new Plant("Java Moss", [10, 10000], "green", [5, 8], false, [20, 24], [8, 12], [0, 1000], [0, 40], [0, 1000]),
  new Plant("Anubias", [15, 30], "dark-green", [6.0, 7.5], false, [22, 28], ["Low", "Medium"], [0.1, 0.5], [5, 10], [10, 20]),
  new Plant("Amazon Sword", [30, 50], "light-green", [6.5, 7.5], true, [22, 28], ["Medium", "High"], [0.5, 2.0], [10, 25], [20, 40])
]
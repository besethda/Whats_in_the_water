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

function Plant (name, sizeRange, color, phRange, isRootFeeder, temperatureRange, lightLevel, lightHours, water, pRange, nRange, kRange) {
  this.name = name
  this.sizeRange = sizeRange
  this.color = color
  this.phRange = phRange
  this.isRootFeeder = isRootFeeder
  this.temperatureRange = temperatureRange
  this.lightLevel = lightLevel
  this.lightHours = lightHours
  this.water = water
  this.pRange = pRange
  this.nRange = nRange
  this.kRange = kRange
}

export const Dwellers = [
  new Creature("Cherry Shrimp", [2.5, 4], "shrimp", ["algae", "biofilm"], 0.2, 0.5, [5, 10], [22, 26], [5, 100], [6.5, 8.0], "fresh", "Low waste; thrives in established planted tanks."),
  new Creature("Neon Tetra", [2, 4], "fish", ["flakes", "micro-pellets"], 0.5, 2.0, [40, 60], [22, 27], [6, 20], [5.0, 7.0], "fresh", "Peaceful schooler; prefers acidic 'blackwater' conditions."),
  new Creature("Amano Shrimp", [4, 5], "shrimp", ["algae", "detritus"], 0.4, 1.2, [20, 40], [18, 28], [1, 10], [6.5, 7.5], "fresh", "Workhorse algae eater; very active and hardy."),
  new Creature("Panda Cory", [3, 5], "fish", ["sinking wafers"], 0.8, 5.5, [40, 60], [20, 25], [6, 12], [6.0, 7.0], "fresh", "Bottom dweller; needs sand to protect sensitive barbels."),
  new Creature("Honey Gourami", [4, 5], "fish", ["flakes", "small insects"], 0.7, 4.0, [40, 60], [22, 28], [1, 2], [6.0, 7.5], "fresh", "Labyrinth fish; needs access to the water surface to breathe."),
  new Creature("Zebra Danio", [4, 6], "fish", ["flakes"], 0.6, 3.5, [60, 80], [18, 24], [6, 15], [6.5, 7.5], "fresh", "Extremely hardy; active swimmer that loves cooler water."),
  new Creature("Mystery Snail", [5, 6], "snail", ["algae", "leftovers"], 1.0, 7.5, [20, 30], [20, 28], [1, 5], [7.0, 8.5], "fresh", "Heavy bio-load; needs alkaline water for shell health.")
]

export const Seaplants = [
  new Plant("Java Moss", [10, 100], "green", [5.0, 8.0], false, [18, 28], "low", [8, 12], "fresh", [0, 5], [2, 8], [2, 10]),
  new Plant("Anubias", [10, 20], "dark-green", [6.0, 7.5], false, [22, 28], "low", [8, 12], "fresh", [0, 2], [1, 4], [2, 8]),
  new Plant("Amazon Sword", [30, 50], "light-green", [6.0, 7.5], true, [22, 28], "medium", [10, 14], "fresh", [5, 15], [10, 25], [10, 30]),
  new Plant("Hornwort", [20, 100], "bright-green", [6.0, 8.5], false, [15, 28], "medium", [10, 14], "fresh", [2, 8], [15, 30], [5, 15]),
  new Plant("Frogbit", [2, 10], "vibrant-green", [6.0, 7.5], false, [18, 26], "high", [10, 14], "fresh", [5, 10], [20, 40], [10, 20])
]
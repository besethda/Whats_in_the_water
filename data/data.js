function Creature(name, sizeRange, type, food, foodAmount, waste, spaceRange, temperatureRange, groupRange, phRange, water, behavior) {
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

function Plant(name, sizeRange, color, phRange, isRootFeeder, temperatureRange, lightLevel, lightHours, water, pRange, nRange, kRange) {
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
  new Creature("Cherry Shrimp", [2.5, 4], "shrimp", ["algae", "biofilm"], 0.2, 0.5, [0.5, 1], [22, 26], [5, 100], [6.5, 8.0], "fresh", "Low waste; thrives in established planted tanks."),
  new Creature("Neon Tetra", [2, 4], "fish", ["flakes", "micro-pellets"], 0.5, 2.0, [2.5, 5], [22, 27], [6, 20], [5.0, 7.0], "fresh", "Schooling fish; needs horizontal swimming space."),
  new Creature("Amano Shrimp", [4, 5], "shrimp", ["algae", "detritus"], 0.4, 1.2, [2, 4], [18, 28], [1, 10], [6.5, 7.5], "fresh", "Larger shrimp; excellent at cleaning algae."),
  new Creature("Panda Cory", [3, 5], "fish", ["sinking wafers"], 0.8, 5.5, [5, 10], [20, 25], [6, 20], [6.0, 7.0], "fresh", "Bottom dweller; heavy waste producer."),
  new Creature("Honey Gourami", [4, 5], "fish", ["flakes", "small insects"], 0.7, 4.0, [15, 25], [22, 28], [1, 3], [6.0, 7.5], "fresh", "Labyrinth fish; needs a larger footprint."),
  new Creature("Zebra Danio", [4, 6], "fish", ["flakes"], 0.6, 3.5, [4, 8], [18, 24], [6, 30], [6.5, 7.5], "fresh", "Fast swimmer; requires longer tanks."),
  new Creature("Fire Shrimp", [5, 8], "shrimp", ["frozen shrimp", "detritus"], 0.4, 1.5, [10, 20], [24, 28], [8, 12], [8.1, 8.4], "salt", "Striking red saltwater cleaner; prefers caves and low light."),
  new Creature("Clownfish", [5, 10], "fish", ["pellets", "mysis"], 0.6, 3.0, [40, 75], [23, 27], [1, 2], [8.1, 8.4], "salt", "Iconic reef fish; very hardy but territorial."),
  new Creature("Yellow Watchman Goby", [5, 8], "fish", ["brine shrimp"], 0.5, 2.5, [30, 50], [22, 26], [1, 2], [8.1, 8.4], "salt", "Bottom-dwelling saltwater fish; often lives with pistol shrimp."),
  new Creature("Multies (Shell Dweller)", [3, 4], "fish", ["small pellets", "brine shrimp"], 0.4, 1.5, [15, 30], [24, 27], [15, 25], [8.0, 9.0], "fresh", "Tiny cichlid; needs high pH and plenty of empty snail shells."),
  new Creature("Guppy", [3, 5], "fish", ["flakes"], 0.3, 1.2, [5, 10], [22, 28], [10, 30], [7.0, 8.5], "fresh", "Extremely hardy and colorful; prefers slightly alkaline water."),
  new Creature("Sulawesi Shrimp", [1.5, 2.5], "shrimp", ["biofilm", "powdered food"], 0.1, 0.3, [1, 2], [26, 30], [6, 10], [7.8, 8.5], "shrimp", "Stunning but sensitive; needs high pH and very warm water."),
  new Creature("Royal Gramma", [5, 8], "fish", ["brine shrimp", "mysis"], 0.5, 2.5, [40, 75], [22, 26], [1, 1], [8.1, 8.4], "salt", "Cave dweller; vibrant purple and yellow. Needs rockwork to feel safe."),
  new Creature("Banggai Cardinalfish", [5, 8], "fish", ["small meaty foods"], 0.4, 2.0, [30, 50], [23, 27], [1, 2], [8.1, 8.4], "salt", "Elegant, slow-moving fish. Prefers low-flow areas and moderate lighting."),
  new Creature("Peppermint Shrimp", [3, 5], "shrimp", ["detritus", "aiptasia"], 0.2, 0.8, [5, 15], [20, 26], [8, 12], [8.0, 8.4], "shrimp", "Useful scavenger; known for eating nuisance anemones in reef tanks."),
  new Creature("Diamond Watchman Goby", [10, 15], "fish", ["sand organisms", "pellets"], 0.7, 4.5, [75, 100], [22, 26], [8, 12], [8.1, 8.4], "salt", "Hard worker; sifts through sand constantly to keep it clean and white."),
  new Creature("Pajama Cardinalfish", [4, 6], "fish", ["flakes", "pellets"], 0.3, 1.5, [30, 60], [22, 28], [8, 12], [8.1, 8.4], "salt", "Hardy, quirky-looking fish. Great for beginners starting a saltwater tank.")
]

export const Seaplants = [
  new Plant("Java Moss", [10, 100], "green", [5.0, 8.0], false, [18, 28], "low", [8, 12], "fresh", [0, 5], [2, 8], [2, 10]),
  new Plant("Anubias", [10, 20], "dark-green", [6.0, 7.5], false, [22, 28], "low", [8, 12], "fresh", [0, 2], [1, 4], [2, 8]),
  new Plant("Amazon Sword", [30, 50], "light-green", [6.0, 7.5], true, [22, 28], "medium", [10, 14], "fresh", [5, 15], [10, 25], [10, 30]),
  new Plant("Hornwort", [20, 100], "bright-green", [6.0, 8.5], false, [15, 28], "medium", [10, 14], "fresh", [2, 8], [15, 30], [5, 15]),
  new Plant("Frogbit", [2, 10], "vibrant-green", [6.0, 7.5], false, [18, 26], "high", [10, 14], "fresh", [5, 10], [20, 40], [10, 20]),
  new Plant("Water Hyssop", [10, 30], "lime-green", [6.5, 7.5], true, [22, 28], "high", [10, 14], "fresh", [3, 7], [10, 20], [5, 15]),
  new Plant("Cryptocoryne Wendtii", [10, 25], "bronze-green", [6.0, 7.5], true, [20, 28], "low", [5, 15], "fresh", [2, 5], [5, 12], [2, 6]),
  new Plant("Chaetomorpha", [10, 50], "lime-green", [8.0, 8.5], false, [20, 28], "medium", [8, 12], "salt", [10, 20], [20, 40], [10, 30]),
  new Plant("Dragon's Breath Algae", [5, 15], "flame-red", [8.1, 8.4], false, [22, 26], "low", [8, 12], "salt", [3, 8], [10, 20], [5, 15]),
  new Plant("Caulerpa Prolifera", [10, 40], "deep-green", [8.0, 8.4], false, [22, 27], "low", [8, 12], "salt", [5, 15], [15, 30], [10, 20]),
  new Plant("Java Fern", [15, 30], "dark-green", [6.0, 8.0], false, [20, 28], "low", [2, 15], "fresh", [0, 2], [2, 5], [2, 10]),
  new Plant("Bucephalandra", [5, 10], "metallic-blue-green", [5.0, 8.0], false, [20, 26], "low", [1, 10], "fresh", [1, 3], [3, 8], [2, 5]),
  new Plant("Vallisneria", [20, 60], "bright-green", [7.0, 9.0], true, [18, 30], "medium", [10, 20], "fresh", [5, 15], [10, 25], [10, 30]),
  new Plant("Red Gracilaria", [10, 30], "deep-red", [8.0, 8.4], false, [20, 26], "high", [8, 12], "salt", [5, 12], [15, 25], [5, 15]),
  new Plant("Sea Lettuce (Ulva)", [5, 20], "bright-green", [7.8, 8.5], false, [15, 26], "high", [8, 12], "salt", [8, 15], [20, 40], [10, 20]),
  new Plant("Halimeda (Money Plant)", [10, 25], "chalky-green", [8.1, 8.4], true, [22, 26], "medium", [10, 15], "salt", [2, 5], [5, 10], [15, 30]),
  new Plant("Blue Ochtodes", [5, 15], "iridescent-blue", [8.1, 8.4], false, [22, 26], "medium", [8, 12], "salt", [3, 7], [10, 20], [5, 10]),
  new Plant("Mermaid's Fan", [10, 20], "dusty-green", [8.1, 8.4], true, [22, 26], "low", [10, 14], "salt", [1, 3], [2, 6], [5, 15])
]
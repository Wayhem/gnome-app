const hairColors = ['black', 'green', 'pink', 'blue', 'rainbow', 'custom gamer rgb']
const professions = [
  'conqueror',
  'archer',
  'mage',
  'blacksmith',
  'software developer',
  'hitman',
  'shepherd',
  'baker',
  'neet',
]
const locations = ['Town1', 'Town2', 'Town3']
const maxHeight = 150
const minHeight = 85
const maxWeight = 50
const minWeight = 20
const maxAge = 500
const minAge = 50
const townsData = {
  [locations[0]]: [
    {
      name: 'Gnomeo',
      hair_color: hairColors[0],
      weight: 35,
      height: 100,
      age: 150,
      professions: professions.slice(0, 2),
    },
    {
      name: 'Julieta',
      hair_color: hairColors[1],
      weight: 35,
      height: maxHeight,
      age: 200,
      professions: professions.slice(2, 4),
    },
  ],
  [locations[1]]: [
    {
      name: 'Keemstar',
      hair_color: hairColors[2],
      weight: maxWeight,
      height: 100,
      age: 150,
      professions: professions.slice(4, 6),
    },
    {
      name: 'Joji',
      hair_color: hairColors[3],
      weight: 35,
      height: minHeight,
      age: maxAge,
      professions: professions.slice(6, 8),
    },
  ],
  [locations[2]]: [
    {
      name: 'Robert',
      hair_color: hairColors[4],
      weight: minWeight,
      height: 100,
      age: 100,
      professions: [professions[2], professions[5], professions[6]],
    },
    { name: 'Saiko', hair_color: hairColors[5], weight: 35, height: 100, age: minAge, professions: [professions[8]] },
  ],
}

export { hairColors, locations, professions, townsData, maxAge, maxHeight, maxWeight, minHeight, minAge, minWeight }

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
const townsData = {
  [locations[0]]: [
    { name: 'Gnomeo', hair_color: hairColors[0], professions: professions.slice(0, 2) },
    { name: 'Julieta', hair_color: hairColors[1], professions: professions.slice(2, 4) },
  ],
  [locations[1]]: [
    { name: 'Keemstar', hair_color: hairColors[2], professions: professions.slice(4, 6) },
    { name: 'Joji', hair_color: hairColors[3], professions: professions.slice(6, 8) },
  ],
  [locations[2]]: [
    { name: 'Robert', hair_color: hairColors[4], professions: [professions[2], professions[5], professions[6]] },
    { name: 'Saiko', hair_color: hairColors[5], professions: [professions[8]] },
  ],
}

export { hairColors, locations, professions, townsData }

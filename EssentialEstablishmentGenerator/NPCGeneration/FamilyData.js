setup.familyData = {

  // These numbers are all made up, feel free to change them
  absencePercent: 72,
  oldAbsencePercent: 40,
  veryOldAbsencePercent: 70,

  marriagePercent: 50,
  remarriagePercent: 6,

  parentStageTable: [
    [55, 'young adult'],
    [90, 'settled adult'],
    [100, 'elderly']
  ],

  parentAgeDelta: (npc) => {
    const race = npc.race || 'human'
    const parentStage = setup.rollFromTable(setup.familyData.parentStageTable)
    const { baseAge, ageModifier } = setup.npcData.raceTraits[race].ageTraits[parentStage]
    return baseAge + ageModifier()
  },
  childAgeDelta: (npc) => (-setup.familyData.parentAgeDelta(npc)),

  siblingAgeDelta: (npc) => {
    const race = npc.race || 'human'
    const { baseAge } = setup.npcData.raceTraits[race].ageTraits['young adult']
    return random(-baseAge, baseAge)
  },

  partnerAgeDelta: (npc) => {
    const race = npc.race || 'human'
    const { baseAge } = setup.npcData.raceTraits[race].ageTraits['young adult']
    return random(-baseAge, baseAge)
  },

  siblingRoll: () => {
    const roll = random(1, 5)
    let siblingNumber
    switch (roll) {
      case 1:
        siblingNumber = 0
        break
      case 2:
        siblingNumber = random(1, 3)
        break
      case 3:
        siblingNumber = random(2, 5)
        break
      case 4:
        siblingNumber = random(3, 8)
        break
      case 5:
        siblingNumber = random(4, 11)
        break
    }
    return siblingNumber
  },

  relativeBase: (npc) => ({
    // lastName: npc.lastName,
    race: npc.race,
    family: npc.family,
    canBeCustom: false,
    isShallow: true,
    hasHistory: false
  })
}

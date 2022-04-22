(() => {
  const atLeast1That = (lst, fn) => {
    const res = lst.filter(fn).length;
    return res >= 1;
  }

  /**
   * Validate if a deck can be chosen.
   * @param deck the deck to validate
   * @return {boolean} whether this deck can be chosen or not
   */
  function validate(deck) {
    const commanderAndUnits = [deck.commander, ...deck.units];
    const cheapAntiInfantry = atLeast1That(commanderAndUnits, u => u.cost <= 30 && u.strongAgainstInfantry());
    const cheapAntiVehicle = atLeast1That(commanderAndUnits, u => u.cost <= 30 && u.strongAgainstVehicle());
    const cheapAntiAir = atLeast1That(commanderAndUnits, u => u.cost <= 30 && u.strongAgainstAir());
    const expensiveAntiInfantry = atLeast1That(commanderAndUnits, u => u.cost >= 40 && u.strongAgainstInfantry());
    const expensiveAntiVehicle = atLeast1That(commanderAndUnits, u => u.cost >= 40 && u.strongAgainstVehicle());
    const expensiveAntiAir = atLeast1That(commanderAndUnits, u => u.cost >= 40 && u.strongAgainstAir());
    const atMost1Tech = deck.atMostNUnitsThat(1, u => u.isTech());

    return cheapAntiInfantry && cheapAntiVehicle && cheapAntiAir && expensiveAntiInfantry && expensiveAntiVehicle && expensiveAntiAir && atMost1Tech;
  }

  return validate;
})()

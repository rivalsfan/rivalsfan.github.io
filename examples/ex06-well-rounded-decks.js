(() => {
  /**
   * Validate if a deck can be chosen.
   * @param deck the deck to validate
   * @return {boolean} whether this deck can be chosen or not
   */
  function validate(deck) {
    const cheapAntiInfantry = deck.atLeastNUnitsThat(1, u => u.cost <= 30 && u.strongAgainstInfantry());
    const cheapAntiVehicle = deck.atLeastNUnitsThat(1, u => u.cost <= 30 && u.strongAgainstVehicle());
    const cheapAntiAir = deck.atLeastNUnitsThat(1, u => u.cost <= 30 && u.strongAgainstAir());
    const expensiveAntiInfantry = deck.atLeastNUnitsThat(1, u => u.cost >= 40 && u.strongAgainstInfantry());
    const expensiveAntiVehicle = deck.atLeastNUnitsThat(1, u => u.cost >= 40 && u.strongAgainstVehicle());
    const expensiveAntiAir = deck.atLeastNUnitsThat(1, u => u.cost >= 40 && u.strongAgainstAir());

    return cheapAntiInfantry && cheapAntiVehicle && cheapAntiAir && expensiveAntiInfantry && expensiveAntiVehicle && expensiveAntiAir;
  }

  return validate;
})()

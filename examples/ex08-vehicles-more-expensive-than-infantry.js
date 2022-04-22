(() => {
  /**
   * Validate if a deck can be chosen.
   * @param deck the deck to validate
   * @return {boolean} whether this deck can be chosen or not
   */
  function validate(deck) {
    /* create a reduce function that compute maximum and minimum cost of a list of units */
    const maxCost = (acc, u) => u.cost > acc ? u.cost : acc;
    const minCost = (acc, u) => u.cost < acc ? u.cost : acc;

    /* compute the least expensive cost of vehicles and most expensive cost of infantry */
    const leastExpensiveVehicleCost = deck.units.filter(u => u.isVehicle()).reduce(minCost, 99999);
    const mostExpensiveInfantryCost = deck.units.filter(u => u.isInfantry()).reduce(maxCost, 0);
    return leastExpensiveVehicleCost > mostExpensiveInfantryCost;
  }

  return validate;
})()

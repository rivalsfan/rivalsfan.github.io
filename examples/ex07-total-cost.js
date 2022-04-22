(() => {
  /**
   * Validate if a deck can be chosen.
   * @param deck the deck to validate
   * @return {boolean} whether this deck can be chosen or not
   */
  function validate(deck) {
    const totalCost = deck.totalUnitsCost() + deck.commander.cost;
    return totalCost >= 240 && totalCost <= 480;
  }

  return validate;
})()

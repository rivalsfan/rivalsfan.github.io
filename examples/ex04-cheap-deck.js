(() => {
  /**
   * Validate if a deck can be chosen.
   * @param deck the deck to validate
   * @return {boolean} whether this deck can be chosen or not
   */
  function validate(deck) {
    /* all units must cost <= 60 and at least 2 units must cost <= 30 */
    return deck.allUnitsThat(u => u.cost <= 60) && deck.atLeastNUnitsThat(2, u => u.cost <= 30);
  }

  return validate;
})()

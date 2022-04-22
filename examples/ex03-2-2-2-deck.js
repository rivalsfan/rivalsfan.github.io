(() => {
  /**
   * Validate if a deck can be chosen.
   * @param deck the deck to validate
   * @return {boolean} whether this deck can be chosen or not
   */
  function validate(deck) {
    /* generate 2-2-2 deck, tech included */
    return deck.nUnitsThat(2, u => u.isInfantry())
      && deck.nUnitsThat(2, u => u.isVehicle())
      && deck.nUnitsThat(2, u => u.isAir());

    /* generate 2-2-2 deck, tech not included */
    // return deck.nUnitsThat(2, u => u.isInfantry() && !u.isTech())
    //   && deck.nUnitsThat(2, u => u.isVehicle() && !u.isTech())
    //   && deck.nUnitsThat(2, u => u.isAir() && !u.isTech());
  }

  return validate;
})()

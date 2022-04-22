(() => {
  /**
   * list of units the deck must contain
   */
   const MUST_CONTAIN = ["Mutant Marauder", "Chem Buggy"];
   /**
    * Commander we want the deck to contain
    */
   const COMMANDER_NAME = "Oxanna";

  /**
   * Validate if a deck can be chosen.
   * @param deck the deck to validate
   * @return {boolean} whether this deck can be chosen or not
   */
  function validate(deck) {
    const mutantChuggyOxanna = deck.containsUnitsByName(MUST_CONTAIN) && deck.hasCommander(COMMANDER_NAME);
    const atMost1Tech = deck.atMostNUnitsThat(1, u => u.isTech());
    const somethingNotCheapShootAir = deck.atLeastNUnitsThat(1, u => u.cost > 30 && u.strongAgainstAir());
    /* Feel free to modify or add more constraints */
    return mutantChuggyOxanna && atMost1Tech && somethingNotCheapShootAir;
  }

  return validate;
})()

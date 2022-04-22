(() => {
  /**
   * list of units the deck must contain
   */
  const MUST_CONTAIN = ["Pitbull", "Missile Squad", "War Dogs", "Shockwave Troopers"];
  /**
   * Commander we want the deck to contain
   */
  const COMMANDER_NAME = "Dr. Liang";

  /**
   * Validate if a deck can be chosen.
   * @param deck the deck to validate
   * @return {boolean} whether this deck can be chosen or not
   */
  function validate(deck) {
    return deck.containsUnitsByName(MUST_CONTAIN) && deck.hasCommander(COMMANDER_NAME);
  }

  return validate;
})()

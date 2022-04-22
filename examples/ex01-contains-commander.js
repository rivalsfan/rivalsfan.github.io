(() => {
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
    return deck.hasCommander(COMMANDER_NAME);

    /* Use below line to generate decks containing either commandar */
    // return deck.hasCommander("Dr. Liang") || deck.hasCommander("Col. Jackson");
  }

  return validate;
})()

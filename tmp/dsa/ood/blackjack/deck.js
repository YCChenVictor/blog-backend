class Deck {
  constructor(sequence = null) {
    if(!sequence) {
      const newCards = Array.from(Array(13).keys(), x => x + 1)
      this.cards = newCards.concat(newCards, newCards, newCards)
    } else {
      this.cards = sequence
    }
  }
}

module.exports = Deck

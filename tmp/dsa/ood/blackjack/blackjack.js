class Dealer {
  constructor() {
    this.cards = []
  }
  
  hit() {}
  
  stand() {}
}

class Player {
  constructor() {
    this.cards = []
  }

  hit() {}

  stand() {}
}
  
class BlackJack {
  // only one player
  // reshuffle after every round
  // dealer must hit if total <= 16
  // dealer must hold if total > 16
  constructor(deck) { // 8, 11, 3, 6, 10, 1
    this.deck = deck
    this.player = new Player()
    this.dealer = new Dealer()
    this.player.cards.push(this.deck.cards.shift())
    this.dealer.cards.push(this.deck.cards.shift())
    this.player.cards.push(this.deck.cards.shift())
    this.dealer.cards.push(this.deck.cards.shift())
  }

  perform(playerMove) {
    if (playerMove === 'hit') {
      this._performPlayerHit()
      this._performDealer()
    } else {
      this._performPlayerStand()
      this._performDealer()
    }

    return this._result()
  }

  _performPlayerHit() {
    this.player.cards.push(this.deck.cards.shift())
  }

  _performPlayerStand() {
    return
  }

  _performDealer() {
    const dealerScore = this._scoreCalculator(this.dealer.cards)

    if(dealerScore <= 16) {
      this._performDealerHit()
    } else {
      this._performDealerStand()
    }
  }

  _performDealerHit() {
    this.dealer.cards.push(this.deck.cards.shift())
  }

  _performDealerStand() {
    return
  }

  _result() {
    const playerScore = this._scoreCalculator(this.player.cards)
    const dealerScore = this._scoreCalculator(this.dealer.cards)

    if(playerScore > dealerScore) {
      return 'wins'
    } else if(playerScore < dealerScore) {
      return 'lose'
    } else {
      return 'tie'
    }
  }

  _scoreCalculator(cards) {
    const score = cards.reduce((accumulator, currentValue) => {
      if(currentValue >= 10) {
        return accumulator + 10
      } else {
        return accumulator + currentValue
      }
    }, 0)

    return score
  }
}

module.exports = BlackJack

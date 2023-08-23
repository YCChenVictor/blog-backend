BlackJack = require('./blackjack.js')
Deck = require('./deck.js')

describe('BlackJack', () => {
  describe('8, 11, 3, 6, 10, 1', () => {
    let deck
    let game
    beforeEach(() => {
      deck = new Deck([8, 11, 3, 6, 10, 1])
      game = new BlackJack(deck)
      // Dealer: 11, 6
      // Player: 8, 3
    })

    describe('Player hit', () => {
      test('should let dealer stand', () => {
        expect(game.dealer.cards.length).toEqual(2)
      })
 
      test('should announce player wins', () => {
        expect(game.perform('hit')).toEqual('wins')
      })
    })

    describe('Player stand', () => {
      test('should let dealer stand', () => {
        expect(game.dealer.cards.length).toEqual(2)
      })

      test('should announce player lose', () => {
        expect(game.perform('stand')).toEqual('lose')
      })
    })
  })

//   test('[9, 2, 7, 4, 11, 8]', () => {
//     beforeEach(() => {
//       let deck = new Deck([9, 2, 7, 4, 11, 8])
//       let game = new BlackJack(deck)
//     })
//     // Dealer: 2, 4
//     // Player: 9, 7
//     it('should let dealer hit', () => {
      
//     })

//     test('Player hit', () => {
//       it('should announce player lose', () => {

//       })
//     })

//     test('Player hold', () => {
//       it('should announce dealer lose', () => {
        
//       })
//     })
//   })
})

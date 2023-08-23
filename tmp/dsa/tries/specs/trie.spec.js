const Trie = require('../examples/trie.js')

describe('Trie', () => {
  let trie = new Trie()
  beforeEach(() => {
    trie.insert('bear')
    trie.insert('bell')
  })

  it('should insert words', () => {
    expect(trie.search('bear')).toEqual(true)
    expect(trie.search('bell')).toEqual(true)
  })

  it('should delete a word', () => {
    trie.delete('bell')
    expect(trie.search('bell')).toEqual(false)
    expect(trie.search('bear')).toEqual(true)
  })
})

function stringCompression(string) {
  let compressed = '';
  let count = 1;
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      compressed += string[i] + count;
      count = 1;
    }
  }
  
  return compressed.length < string.length ? compressed : string;
}

module.exports = stringCompression;

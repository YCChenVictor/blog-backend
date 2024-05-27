// Question: Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// The strings could be any symbols, :, ; , & ,...
// My first thought just concatenate them with space
// Ok, seems that GPT cannot solve it also, the separator should not be the same as the element

const input1 = ["we", "say", ":", "yes"];
const input2 = ["we", "say", ";", "yes"];

function encodeStrings(input) {
  return input.join(' ');
}

function decodeStrings(input) {
  return input.split(' ');
}

decodeStrings(encodeStrings(input2));

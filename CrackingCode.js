'use strict';

function decode(encrypted) {
  let words = encrypted.split(' ');
  let result = '';
  const cypher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
  };


  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word[0];
    if (cypher[firstLetter] == undefined) {
      result += ' ';
    }
    else {
      let index = cypher[firstLetter] - 1;
      result += word[index];
    }
  }




  return result;
}

function decodeWords(words) {
  return decode(words);
    
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));

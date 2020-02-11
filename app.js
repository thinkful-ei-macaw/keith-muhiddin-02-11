'use strict';

function max(numbers) {
  if(numbers.length === 0) {
    return undefined;
  } else {
    let i = 1;
    let maxNum = numbers[0];
    while(i < numbers.length) {
      if(maxNum < numbers[i]) {
        maxNum = numbers[i];
      }
      i++;
    }
    return maxNum;
  }
}

console.log(max([5, 1, 9, 0]));


function min(numbers) {
  if(numbers.length === 0) {
    return undefined;
  } else {
    let i = 1;
    let minNum = numbers[0];
    while(i < numbers.length) {
      if(minNum > numbers[i]) {
        minNum = numbers[i];
      }
      i++;
    }
    return minNum;
  }
}

console.log(min([5, 1, 9, 0]));
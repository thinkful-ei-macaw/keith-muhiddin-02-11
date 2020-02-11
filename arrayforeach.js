'use strict';

function average(numbers) {
    let sum = 0;
    numbers.forEach( 
        number => sum += number
    )
    return sum / numbers.length;
};

console.log(average([1,2,3,4,5]));
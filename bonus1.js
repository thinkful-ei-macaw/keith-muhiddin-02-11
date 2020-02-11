'use strict';

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];

  function findOne(arr, querry) {
    for (let i = 0; i < arr.length; i++) {
        let currentObj = arr[i];
        let string1 = JSON.stringify(currentObj);
        let string2 = JSON.stringify(querry);
        let resultString2 = string2.slice(1, string2.length-1);
        
        if (string1.includes(resultString2)) {
            return currentObj;
        }
        
    }
    return null;
  }

  console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }))


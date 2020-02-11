'use strict';

function createCharacter(character) {
  
  return {
    name: character.name, 
    nickname: character.nickname,
    race: character.race, 
    origin: character.origin,
    attack: character.attack,
    defense: character.defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let x = Math.max(character.attack - opponent.defense, 0);
      let y = Math.max(opponent.attack - character.defense, 0);
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  };
}

/* Using the .find() function, retrieve your character nicknamed 
aragorn from characters and then call his describe method.*/


const characters = [
  {
    name: 'Gandalf the White',
    nickname: 'gandalf',
    race: 'wizard',
    origin: 'Middle Earth',
    attack: 10,
    defense: 6
  },
  {
    name: 'Bilbo Baggins',
    nickname: 'bilbo',
    race: 'Hobbit',
    origin: 'The Shire ',
    attack: 2,
    defense: 1
  },
  {
    name: 'Frodo Baggins ',
    nickname: 'frodo',
    race: 'Hobbit',
    origin: 'The Shire ',
    attack: 3,
    defense: 2
  },
  {
    name: 'Aragorn son of Arathorn',
    nickname: 'aragorn',
    race: 'Man',
    origin: 'Dunnedain',
    attack: 6,
    defense: 8
  },
  {
    name: ' Legolas',
    nickname: 'legolas ',
    race: 'Elf',
    origin: 'Woodland Realm',
    attack: 8,
    defense: 5
  }
];



characters.find(function(character) {
  if(character.nickname === 'aragorn') {
    createCharacter(character).describe();
  }
});

console.log(characters.filter(function(character) {
  return character.race === 'Hobbit';
}));

console.log(characters.filter(function(character) {
  return character.attack > 5;
}));






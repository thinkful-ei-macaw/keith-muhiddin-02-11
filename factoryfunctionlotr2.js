'use strict';

function createCharacter(character) {
  
  return {
    name: character.name, 
    nickname: character.nickname,
    race: character.race, 
    origin: character.origin,
    attack: character.attack,
    defense: character.defense,
    weapon: character.weapon,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(opponent) {
      let x = Math.max(character.attack - opponent.defense, 0);
      let y = Math.max(opponent.attack - character.defense, 0);
      return `Your opponent takes ${x} damage from your ${character.weapon} and you receive ${y} damage from their ${opponent.weapon}`;
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
    defense: 6,
    weapon: 'Wizard Staff and Glamdring'
  },
  {
    name: 'Bilbo Baggins',
    nickname: 'bilbo',
    race: 'Hobbit',
    origin: 'The Shire ',
    attack: 2,
    defense: 1,
    weapon: 'ring'
  },
  {
    name: 'Frodo Baggins ',
    nickname: 'frodo',
    race: 'Hobbit',
    origin: 'The Shire ',
    attack: 3,
    defense: 2,
    weapon: 'Sting and Barrow Sword'
  },
  {
    name: 'Aragorn son of Arathorn',
    nickname: 'aragorn',
    race: 'Man',
    origin: 'Dunnedain',
    attack: 6,
    defense: 8,
    weapon: 'Anduril'
  },
  {
    name: 'Legolas',
    nickname: 'legolas ',
    race: 'Elf',
    origin: 'Woodland Realm',
    attack: 8,
    defense: 5,
    weapon: 'Bow and Arrow'
  },
  {
    name: 'Arwen Undomiel',
    nickname: 'Arwen',
    race: 'half elf',
    origin: 'Rivendel',
    attack: 6,
    defense: 8,
    weapon: 'Hadhafang'
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






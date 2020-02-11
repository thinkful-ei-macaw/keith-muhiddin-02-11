'use strict';

const array = [
  { 
    boss: 'Bob',
    'name': 'person1',
    'job title': 'job1',
  },
  {
    boss: 'Bob',
    'name': 'person2',
    'job title': 'job2',
  },
  {
    boss: 'Bob',
    'name': 'person3',
    'job title': 'job3',
  },
  {
    'name': 'Bob',
    'job title': 'job4',
  },
];

array.forEach (
  function(element) {
    if(!element['boss']) {
      console.log(`${element['job title']} ${element['name']} doesn't report to anybody.`);
    } else {
      console.log(`${element['job title']} ${element['name']} reports to ${element['boss']}.`);
    }
  }
);
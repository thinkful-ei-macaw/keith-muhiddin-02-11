'use strict';

const array = [
    {
        'name': 'person1',
        'Job Title': 'job1',
    },
    {
        'name': 'person2',
        'Job Title': 'job2',
    },
    {
        'name': 'person3',
        'Job Title': 'job3',
    },
    {
        'name': 'person4',
        'Job Title': 'job4',
    },
]

array.forEach (
    function(element) {
        console.log(element['name'], element['Job Title']);
    }
);
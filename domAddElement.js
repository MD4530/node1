
'use strict';
let k = [
    'Milk',
    'Creame',
    'Mango',
    'banana',
    'Skim'
];

let place = document.getElementById('list-item');

for (let i = 0; i < k.length; i++) {
    let itemNummber=i+1;
    let tagCre = document.createElement('li');
    tagCre.id='item'+itemNummber;
    tagCre.appendChild(document.createTextNode(k[i]));
    place.appendChild(tagCre);
}


place.removeChild(place.children[1]);
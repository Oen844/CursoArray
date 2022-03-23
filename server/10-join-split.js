const elements = [ 'Fire', 'Air', 'Water'];

let separator = '--';
let rtaFianl = '';

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFianl+= element + separator; 
    
}

const rta2 = elements.join('--');

console.log('for '+rtaFianl);
console.log('join '+rta2);

const title = 'Curso de manipulación de arrays';

const titleFianl = title.split(' ').join('-').toLowerCase();
console.log(titleFianl);



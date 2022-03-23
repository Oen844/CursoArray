const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

let newArray=[];
// for (let index = 0; index < elements.length; index++) {         
//     const element = elements[index];
//     newArray.push(element);
//   }
  
newArray = [...elements];

for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}

console.log(newArray);

const rta = elements.concat(othersElements);
const rta2 = [...elements, ...othersElements];

console.log(rta);
console.log(rta2);

elements.push(...othersElements);
console.log(elements);
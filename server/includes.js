const pets = ["cat", "dog", "bat"];
let includeArray = false;

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    includeArray = true;
    break;
  }
}

console.log('for '+ includeArray);

const rta2 = pets.includes('dog');
console.log('includes '+rta2);
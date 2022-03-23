const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const newArray = [];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}
console.log(newArray);

const matriz2 = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

const profundidad = (list) => {
  let newList = [];
  if (typeof list != "object") return [list];
  list.forEach((element) => {
    newList = newList.concat(profundidad(element));
  });
  return newList;
};

const rta3 = profundidad(matriz2);
console.log(rta3);


const rta4 = matriz2.flat();
console.log(rta4);


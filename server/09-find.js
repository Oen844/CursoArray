const { el } = require("date-fns/locale");

const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];

  if (element === 30) {
    rta = element;
    break;
  }
}
console.log(rta);

const rta2 = numbers.find((item) => item === 30);
console.log(rta2);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta3 = products.find((item) => item.id === "🌭"); //devuelve el elemento
console.log(rta3);
const rta4 = products.findIndex((item) => item.id === "🌭"); //devuelve el indice donde se encuentra el elemento en el array
console.log(rta4);

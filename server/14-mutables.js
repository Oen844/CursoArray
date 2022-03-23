const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 125, id: "🥞" },
];

const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const product = products.findIndex((item) => item.title === "Burger");
if (product) {
  myProducts.push(products[product]);
  products.splice(product, 1);
}

console.log("products", products);
console.log("myProducts", myProducts);

const productsV2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];
const update = {
  id: "🥞",
  changes: {
    price: 200,
    description: "delicioso",
  },
};

const producIndex = productsV2.findIndex(item => item.id === update.id);
productsV2[producIndex] = {
    ...productsV2[producIndex],
    ...update.changes,
}

console.log(productsV2);

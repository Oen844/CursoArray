const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.push(element);
  }
}

console.log("newArray", newArray);
console.log("original", words);

const rta = words.filter((items) => items.length >= 6);
console.log("rta", rta);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const rta3 = orders.filter(
  (items) => items.delivered == true && items.total >= 100
);

console.log("rta3", rta3);

const search = (query) => {
    return orders.filter(items => {
        return items.customerName.includes(query);
    })
}
console.log(search('entina'));
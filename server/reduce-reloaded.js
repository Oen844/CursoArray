const items = [1, 3, 2, 3, 3, 10, 1];

const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(rta);

if (rta["10"]) {
  console.log("tengo el numero");
} else {
  console.log("No tengo");
}

const encontrarNumero = (num) => {
  if (rta[num]) {
    console.log(`Existe el numero: ${num} en este array`);
  } else {
    console.log(`No existe el numero: ${num} en este array`);
  }
};


encontrarNumero("5");

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta2 = data //pil
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

console.log(rta2);

const items2 = [1, 3, 2, 3, 3, 10, 1, 11, 11, 15, 8, 7, 8, 9, 4, 12, 13];

const rta3 = items2.reduce(
  (obj, item) => {
    if (item < 5) {
      obj["0-4"] += 1;
    }
    if (item <= 10 && item < 5) {
      obj["5-10"] += 1;
    }
    if (item <= 15 && item > 10) {
      obj["11-15"] += 1;
    }
    return obj;
  },
  {
    "0-4": 0,
    "5-10": 0,
    "11-15": 0,
  }
);

console.log(rta3);

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
const rta = orders.map(item=>item.total);

// const rta2 = orders.map(item => {        //se copia la referencia en memoria
//     item.tax= 0.19;
//     return item;
// });
const rta3 = orders.map(item => {   //hacemos la copia de nuevo item entero de modo que no afecta a item de orders
    
    return {
        ...item,
        tax: 0.19,
    };
})



console.log('new ', rta);
console.log('Original',orders);
// console.log('rta ', rta2);
console.log('rta ', rta3);
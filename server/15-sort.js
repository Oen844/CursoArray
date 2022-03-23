const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();  //orden alfabetico
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a-b);
console.log(numbers);
numbers.sort((a,b) => b-a);
console.log(numbers);

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b)=> a.localeCompare(b));
console.log(words);

const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date (2021, 8, 12, 3),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date (2021, 2, 12, 3),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date (2021, 7, 12, 3),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date (2021, 9, 12, 3),
    },
  ];

  orders.sort((a,b) => b.total - a.total) ;

  console.log( orders);
  
  orders.sort((a,b) => a.date - b.date);

  console.log('-------------------------')
  console.log(orders);
  console.log('-------------------------')

  const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);
console.log(rta);

const numbers1 =[11,1,13,99,8];
numbers1.sort((a,b) => a-b);
console.log(numbers1);  //muy buena

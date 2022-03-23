const totals = [1,2,3,4];

let sum = 0
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum +=element;
    
}



console.log(sum);
let sum2;
const rta = totals.reduce((sum2, item)=> sum2 +item, 0);    //el valor final es 0
console.log(rta);
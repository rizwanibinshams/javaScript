
let a = 19;
let b = '20'

console.log(parseInt(b));
console.log(a.toString());

let c = '88';

function sum(c){
 
 let summ = 0
 for(let i=0;i<c.length;i++){
    summ += Number(c[i])
 }
 return summ
}

console.log(sum("88"));
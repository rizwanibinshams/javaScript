// const player ={
//     name : 'rizwan',
//     place: 'kannur',
//     age: 21
// }

// const {name,...rest} = player
// console.log(rest);
// console.log(name);


function sum(a,b,...num){
    let sum =0
    for(let x of num){
        sum+=x;

    }
    console.log(a+b+sum);
}
sum(1,2,3,4,5,6)
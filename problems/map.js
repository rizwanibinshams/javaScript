//map

// let arr = [1,2,3,4,5,6]

// function double(x){
//     return x*2
// }
// function triple(x){
//     return x*3
// }

// const bine = arr.map((x)=>x.toString(2))
// const  out1 = arr.map(triple)

// const Output = arr.map(double)

// console.log(Output);
// console.log(out1);
// console.log(bine);

// print all firt name and last name 



// const out = users.map((x)=>x.firstName + " " + x.lastName )
// console.log(out);

// let arr1 = [1,2,5,6,]

// function fourth(x){
//     return x*4
// }

// const four = arr1.map(fourth).reduce((curr,vall)=>{
//   sum = curr+vall
//   return sum;
// },0)


// console.log(four);


//squre root of all num

let arr =[1,2,[5,6],3,4]

let flating = arr.flat(Infinity)
let mapped = flating.map((x)=>{
 return x*2;
})
console.log(mapped);

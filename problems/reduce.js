//sum

// let arr =[1,2,3,4,5,6]

// function findsum (arr){
//     let sum = 0
//     for(let i =0;i<arr.length;i++){
//         sum +=arr[i]


//     }
//     return sum
// }
// console.log(findsum(arr));

// const out = arr.reduce((sum,value)=>{
//     sum +=value
//     return sum
// },0)

// console.log(out);

//max value

// let arr = [1,2,4,5,3,7]

// const out = arr.reduce((max,value)=>{
//     if(value>max){
//         max = value;
//     }
//     return max
// },0)
// console.log(`maximum of array  ${out} `);


//{ '18': 1, '21': 2, '23': 1 }
// let users =[
//     {firstName : 'rizwan',lastName : 'shams',age: 21},
//     {firstName : 'safwan',lastName : 'shams',age: 18},
//     {firstName : 'alan',lastName : 'joshy',age: 23},
//     {firstName : 'fayad',lastName : 'peter',age: 21},
// ]

// const out = users.reduce((sampleAge,value)=>{
//     if(sampleAge[value.age]){
//         sampleAge[value.age] = ++sampleAge[value.age]
//     }else{
//         sampleAge[value.age]=1
//     }
//     return sampleAge
// },{})
// console.log(out);


// let users =[
//     {firstName : 'rizwan',lastName : 'shams',age: 21},
//     {firstName : 'safwan',lastName : 'shams',age: 18},
//     {firstName : 'alan',lastName : 'joshy',age: 19},
//     {firstName : 'fayad',lastName : 'peter',age: 21},
// ]

// let out = users.reduce((acc,value)=>{
//     if(value.age <20){
//         acc.push(value.firstName)
//     }
//     return acc;
// },[])
// console.log(out);


// let a =[2,3,4,5]

// const x = a.reduce((acc,val)=>{
//     sum = acc+val
//     return sum;
// },0)
 
// console.log(x);

// let b =[2,3,4,5,6]
// const y = b.reduce((accu,value)=>{
//    return accu + value
    
// },0)
// console.log(y);

// let val = 0;

// do{
//     console.log(val);
//     val++;
// }while(val<5)

// largest even value in an array

// let arr1 =[12,25,52,85,40]

// const largest = arr1.reduce((max,current)=>{
//    if(current % 2 === 0 && current > max) {
//      return current;
     
//    }
//    return max;
// })
// console.log(largest);

 
// even numbers
let findEven=[1,2,3,4,5,6]

let even = findEven.reduce((acc,val)=>{
  if(val%2==0){
   acc.push(val)
     
  }
 return acc;
},[])
console.log(even);
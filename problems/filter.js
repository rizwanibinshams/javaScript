// let arr = [1,2,3,4,5,6]

// const odd = arr.filter((x)=>x%2)
// const even = arr.filter((x)=>x%2===0)
// const greater = arr.filter((x)=>x>4)

// console.log(odd);
// console.log(`even numbers are ${even}`);
// console.log(`greater of 4  are ${greater}`);

let users =[
    {firstName : 'rizwan',lastName : 'shams',age: 21},
    {firstName : 'safwan',lastName : 'shams',age: 18},
    {firstName : 'alan',lastName : 'joshy',age: 19},
    {firstName : 'fayad',lastName : 'peter',age: 21},
]

const out = users.filter((x)=> x.age < 20).map((x)=>x.firstName)

console.log(out);
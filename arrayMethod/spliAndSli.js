let arr =['a','b','c','d']

arr.splice(2,1) //this is deletion from second elemet from 
                // next 1 element
console.log(arr);

//second one

let arr1 =['a','b','c','d']

arr1.splice(2) //it will only show first two elements
console.log(arr1);


//element add using splice

let arrAdd=['a','b','c']

arrAdd.splice(3,0,'d','e') //it will add from after 3 value
console.log(arrAdd);


//slice
//it will create a new array

let arrSlice =['a','b','c','d']

let newArray =arrSlice.slice()//it will print after second element
console.log(arrSlice);

newArray.splice(1,0,'e','f') //it will add e and f


for(let x of newArray){
    console.log(x);  //it will take all element seperatly
}

console.log(newArray);
//it also give copy of array

let fruits = ['apple','banana','grape']
 
   fruits.push('orange')
   fruits.splice(1,1) //it will delete from index one 
                     // and delete one element
   console.log(fruits);
   


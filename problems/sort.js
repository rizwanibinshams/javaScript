let arr =[25,1,330,85,45]


let arr1 = arr.sort((a,b)=>b-a)
console.log(arr1);


let arr2 = [25,30,44,22,11]

let newArr = arr2.reduce((acc,curr)=>{
     
    if(curr %2===0){
        acc.evenSum +=curr;
    }else{
        acc.oddSum += curr
    }
        return acc;


},{evenSum:0,oddSum:0})

console.log('sum of even is :',newArr.evenSum);
console.log('sum of odd is :',newArr.oddSum);
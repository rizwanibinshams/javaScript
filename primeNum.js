

function isPrime(n){
    if(n<2) return false;

    for(let i=2;i *i <= n;i++){
        if( n % i === 0){
            return false;
        }
    }
    return true
}

console.log(isPrime(7));


function primeArray(arr){
    let newArray = [];

    for(let i=0;i<arr.length;i++){
        if(isPrime(arr[i])){
            newArray.push(arr[i])
        }
    }
    return newArray.lenght > 0 ? "no prime number " : newArray
}


 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


console.log(primeArray(arr));






// function primeInArray(arr){
//    let isPrimeNum = [];


//    for(let i=0;i<arr.length;i++){
//     if(isPrime(arr[i])){
//         isPrimeNum.push(arr[i])
//     }
//    }
//    return isPrimeNum.length > 0 ? isPrimeNum : "no prime"

// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


// console.log(primeInArray(arr));
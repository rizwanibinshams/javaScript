

function sorted(arr){
    for(let x of arr){
        if(arr[x]>arr[x+1]){
            return false
        }

    }
    return true
}

console.log(sorted([1,2,3,4]));
console.log(sorted([2,4,5,1]));
function unique(arr){
    return  arr.filter((item,index)=>
        arr.indexOf(item) === index)
}

console.log(unique([1,2,3,1,4,2,2,1,4,5,6]));


function dupl(arr1){
    return [...new Set(arr1)]
}

console.log(dupl([1,2,3,1,2,3,4,5]));


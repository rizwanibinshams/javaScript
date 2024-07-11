


const radius = [1,3,5,6]

const calculate = function(radius,logic){
    const output=[]
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output;
}

const area = function (radius) {
    return 2 * Math.PI *radius;
}
const diameter = function (radius){
    return 2 * radius;
}


console.log(`area of circle : ${calculate(radius,area)}`);
console.log(`diameter of circle : ${calculate(radius,diameter)}`);
 

//using map function 

let arr1 =[2,3,5,4]


let calci = function(arr1,logi){
    return arr1.map(logi)
}
let areaOf = function(arr1){
    return 2*Math.PI*arr1
}

console.log(calci(arr1,areaOf));
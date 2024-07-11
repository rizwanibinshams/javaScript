let myString = 'hello'

function reverseString(str){
    let newArray = str.split('') // convert string to array
    let  reversedArray = newArray.reverse(); // reverse the array
    let outPut = reversedArray.join('') // join the reversed array to string
        return outPut
       
}

let reversed = reverseString(myString)
console.log(reversed);

// using spread operator


let stringss = 'rizwan'

function revers(strr){
    return [...strr].reverse().join('')
}

let newReverse = revers(stringss)
console.log(newReverse);


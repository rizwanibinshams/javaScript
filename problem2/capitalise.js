

// function capital(str){


//     return str.split(' ').map(word =>word.charAt(0).toUpperCase()+ word.slice(1)).join(' ')
// }
// console.log(capital('helloo world'));


// const arr = 'hello world'

// let char = arr.split(' ')

// console.log(char);


// let char = arr.split(' ').map(word=>{
//    return word.charAt(0).toUpperCase()
//  })
// console.log(char);

let name = 'rizwan ibin'

function caps(arr1){
    return arr1.split(' ').map(x => x.charAt(0).toUpperCase()+x.slice(1)).join(' ')
}

console.log(caps(name));

  

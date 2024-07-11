// //changing values 


// const arr = '999520'
// let char = arr.split('')

//  for(let x in char) {
//        if(char[x] === '9') {
//          char[x] = '8'
//        }
//  } 
// console.log(char.join(''));

//        /// orr

//   let str = 'i love malayalam'  
  
//   let str1 = str.split(' ').map(x => x === 'malayalam' ? 'english' : x)
  
//   console.log(str1.join('  '));


//how many nums are smaller than the current num


 let num =[8,1,2,2,3]

 let missing = function(num){
    let result = [];
    let n = num.length
    for(let i =0;i<n;i++){
        let count = 0;
        for(let j=0;j<n;j++){
            if(num[j]<num[i]){
                count++
            }
        }
        result.push(count)
    }
        return result
 }
 
 console.log(missing(num));



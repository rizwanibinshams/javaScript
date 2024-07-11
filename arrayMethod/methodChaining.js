let strr ='hello world'

let result = strr

    .trim()
    .toUpperCase()
     .split(' ')
    .join('-');

    console.log(result);
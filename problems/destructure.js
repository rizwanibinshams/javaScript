
//array destructing

// let arr = ['hello','iam','rizwan']

// let [first,second,third] = arr

// console.log(first);

//object destructing

let obj = 
{
    name: 'riz',
    place : 'kannur'
}


let {name,place}=obj
name = 'rizn'
console.log(place);


const obj1 ={
    name1: 'rizn',
    place1: 'knr',
    adress:{
        city :'iritty'
    }
}

const { name1:yrr,place1,adress:{city}} = obj1

console.log(yrr);
console.log(city);

//deep copy
const obj ={
    name :'rizwan',
    Place : 'kannur',
    adress :{
                city : 'iritty'
    }

}

const deepCopy = JSON.stringify(obj)
obj.adress.city= 'ity'   //it not change ,because it copy all the things
console.log(deepCopy);



//shallow copy

const obj1 = {
    name : 'safwan',
    age : 21,
    adress :{
        city : 'kannur'
    }
}

const shallowCopy = Object.assign({},obj1)

obj1.adress.city='irityy' //it will be change ,bcz it will take
                        // only referance of child obj
console.log(shallowCopy);

//shallow copy using spread operator

const objSpread ={
    a :1,
    b: 2,
    c:{
        d:4
    }
}
objSpread.c.d=5
const clone = {...objSpread}

console.log(clone);
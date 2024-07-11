function curried (a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(curried(10)(5)(2));



function curry(a){
        return function(b){
            return function(c){
                return a*b*c
            }
        }
}

console.log(curry(2)(3)(4));

function hello(greet){
    return function(name){
        return  `${greet} ${name}`
    }
}
console.log(hello('hii')('rizwan'));


function name1(x){
    return function(y){
        return x+y
    }
}

console.log(name1(2)(4));
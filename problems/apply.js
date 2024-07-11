// function greet(greeting, punctuation) {
//     console.log(greeting + ', ' + this.name + punctuation);
// }

// const person = { name: 'Alice' };

// greet.apply(person, ['Hello', '!']);


function welcome(greet){
    console.log(greet + this.name);
}
const person1 = {
    name : 'rizwan'
}
const persom = {
    name : 'saf'
}
welcome.apply(person1,['hello'])
welcome.apply(persom,['hello'])


function hello(greet){
    console.log(greet + this.name);
}
const persn ={
    name : 'rizz'
}

hello.apply(persn,['hiii'])
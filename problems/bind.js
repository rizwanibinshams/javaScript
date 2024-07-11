// function greet(greeting, punctuation) {
//     console.log(greeting + ', ' + this.name + punctuation);
// }

// const person = { name: 'Alice' };

// const greetPerson = greet.bind(person, 'Hello');
// greetPerson();



function binding(greet){
    console.log(greet +" ,"+ this.name);
}

const person1 = {
    name :'rizwan'
}
const callPerson = binding.bind(person1,'helloo')
callPerson();

function callF(surname){
    console.log(surname+" "+this.name);
}

const dude = {
    name : 'mariya'
}
const calling = callF.bind(dude,'jen')

calling() // call with function 
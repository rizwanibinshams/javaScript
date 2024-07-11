// function greet(greeting) {
//     console.log(greeting + ', ' + this.name );
// }

// const person = { name: 'Alice' };

// greet.call(person, 'Hello', '!');


function calling(greet){
    console.log(greet + this.name);
}

const person1 = {name: 'rizwan'}

calling.call(person1,'hellooo')

calling.apply(person1,['hey'])


 let cc = calling.bind(person1,'hllooo')
 cc()
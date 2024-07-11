

const weakMap = new WeakMap(); //create weekmap

const obj1 ={}  //declare a empty object
const obj2 ={}

weakMap.set(obj1,'value added in obj1')  // adding Values to object
weakMap.set(obj2,'value added in obj2')

console.log(weakMap.get(obj1));  //calling object
console.log(weakMap.get(obj2));

weakMap.delete(obj1)  //deleting object
console.log(weakMap.has(obj1));  //checking



const adding = new WeakMap()

let first = {}
let second = {}

adding.set(first,'added first')
adding.set(second,'added second')

console.log(adding.get(first));
console.log(adding.get(second));
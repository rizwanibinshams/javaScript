// function employee(firstName,lastName){
//     this.firstName =firstName
//     this.lastName = lastName
// }

// employee.prototype.company = 'fliqu.in'

// let employee1 = new employee('rizn','shams')
// let employee2 = new employee('safn','shams')

// console.log(`${employee1.firstName} ${employee1.lastName} ${employee1.company}`);
// console.log(`${employee2.firstName} ${employee2.lastName} ${employee2.company}`);


function employee(firstName,lastName){
    this.firstName =firstName
    this.lastName = lastName
}
employee.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`
}

employee.prototype.company = 'fliqu.in'

let employee1 = new employee('rizn','shams')
let employee2 = new employee('safn','shams')

console.log(employee1.fullName() + ' ' + employee1.company);
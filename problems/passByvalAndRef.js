
//pass by value

function passValue(value){
    value = 3;
}
let num = 5;
    passValue(num)
    console.log(num);
   

    //pass by referance

    function myObj(obj){
        obj.name = 'rizwan'
    }

    let person = {
        name : 'safwan' //this value will print
    }
    myObj(person)  // this is the refferance 87
    console.log(person.name);

   

//if and else


// let johnAge = 20
// if(johnAge===45){
//     console.log('you are age')
// }else if(johnAge >= 20 && johnAge<=30){
//  console.log('you are in between')
// }
// else{
//     console.log('you are young')
// }

//switch

// let Fruit = 'apple'

// switch(Fruit){
//     case 'apple' :
//         console.log('i bouht apple')
//         break

//     case 'banana' :
//         console.log('i bought banana')    
//         break

//     default :
//         console.log('no fruit')    
// }

//loop for

    // let count =10;

    // for(let i=0; i<=10;i++){
    //     console.log(i)
    // }

    //loop while

    // let count=0;

    // while(count<=10){
    //     console.log(count)
    //     count++
    // }

    //do-while

    // let count=10
    // do{
    //     console.log(count)
    //     count++
    // }while(count<=  19)

        //Array-object

        // let Array = ['john','doe','jocob']
        // for(let i=0;i<Array.length;i++){
        //     document.write(Array[i] + "<br>")
        // }

        //forOfLoop


        // let Array=['John','Doe','Jacob']
        // for(let x of Array)
        // {
        //     console.log(x + "\n")
        // }

        //ArrayObj

        // let myObj = {
        //     firsName : 'rizwan',
        //     lastName : ' ibin shams',
        //     Age : 21
        // }
        // for(let x in myObj){
        //     document.write( myObj[x] + '<br>')
        // }

        //Events
         
        // way-1

        // function Alert(){
        //     alert("Clicked")

        // }

        //way-2

    //     let btn = document.getElementById('btn') 
        
    //    btn.addEventListener('mouseover',function(){
    //     alert('clicked')
        
    //    })

        //or
        // btn.addEventListener('click',myfunction)

        // function myfunction(){
        //     alert('clicked')
        // }

    //    let doc = document.getElementById("txt")
    //      doc.innerText ='hiii';
    //      console.log(doc)
       
       

    //spread operator 

    //object

    // const gplayer={
    //     id : 0,
    //     level: 100
    // }

    // const player1 ={...gplayer}

    // player1.level = 60

    // console.log(player1)
    // console.log(gplayer)


    //array
    //sort


    // const array =['1','2','3']
    // const array1 = ['4','5','6']

    // const mainArray=[...array,...array1]

    // const array2 = 

    // console.log(mainArray)


    //value add

    // const array =['1','2','3']
    // const array1 = ['4','5','6']

    // const mainArray=[...array,'4','5']

    // console.log(mainArray)

    // destructor 

    //array

    // const arr = ['rahl','madav','ravi']

    // const [first,second,third] = arr
    // console.log(first)
    // console.log(second)
    // console.log(arr)

    // object

    // const player ={
    //     id : 0,
    //     name : 'rahul',
    //     age :20
    // }

    // const{ id,name,age} = player

    // console.log(id,name,age)

    // console.log(player)

    //rest

    // const player ={
    //     id:0,
    //     name : 'rahil',
    //     age: 15

    // }
    // const {id,...rest}=player
    // console.log(id);
    // console.log(rest);


    //arrrow

    // first one
    // const myfunction = () =>{
    //     console.log("helloooo")
    // }

    // myfunction()

    //second one

    // const myfunction = value =>value+5

    // console.log(myfunction(5))

    //third one

    // const myfunction =(value)=>{
    //     return value+5
    // }

    // console.log(myfunction(5));

    //forEach

    // const player =[
    //     {
    //         id:0,
    //         name : 'rahil',
    //         age: 15
    
    //     },
    //     {
    //         id:1,
    //         name : 'rahul',
    //         age: 15
    
    //     },
    //     {
    //         id:2,
    //         name : 'raheil',
    //         age: 15
    
    //     },
    // ];

    // player.forEach (function(value,index,array){
    //     console.log(value.name)
    //     console.log(index)
    //     console.log(value.age)
    //     console.log(array)

    

    // })

    // player.forEach ((value,index,array) => console.log(value.name))

    //map


    // const player =[
    //     {
    //         id:0,
    //         name : 'rahil',
    //         age: 15
    
    //     },
    //     {
    //         id:1,
    //         name : 'rahul',
    //         age: 15
    
    //     },
    //     {
    //         id:2,
    //         name : 'raheil',
    //         age: 15
    
    //     },
    // ];


    //  player.map(value => console.log(value.name) )
     
   

        
    //filter

    // const player =[
    //     {
    //         id:0,
    //         name : 'rahul',
    //         age: 20
    
    //     },
    //     {
    //         id:1,
    //         name : 'rahul',
    //         age: 20
    
    //     },
    //     {
    //         id:2,
    //         name : 'raheil',
    //         age: 20
    
    //     },
    // ];

    // const newPlayer = player.filter((value)=> value.age===20 && value.name=='rahul')  
    // console.log(newPlayer);


    //reduce 

    // const numArray =[1,2,52,155,15]

    // const newArray = numArray.reduce((total,value) => total+value,0)
    // console.log(newArray)


    //find
    
    // const player =[
    //         {
    //             id:0,
    //             name : 'rahul',
    //             age: 20
        
    //         },
    //         {
    //             id:1,
    //             name : 'rahul',
    //             age: 2  
        
    //         },
    //         {
    //             id:2,
    //             name : 'raheil',
    //             age: 25
        
    //         },
    //     ];
   
    //     const newPlayer = player.find((value) => value.age ===25)
    //     console.log(newPlayer);


        //sort


    //      const numArray =[1,2,52,155,15]

    // const newArray = numArray.sort((a,b) => a-b)
    // console.log(newArray)

    //es10
    //flat

    // const numArray= [1,2,[12,20],30,[32,40,[45,50]],51]
    // console.log(numArray.flat(Infinity))

    //apply()
    

    // const person ={
    //     fullName : function(){
    //         return this.firstName + " " + this.lastName;
    //     }
    // }

    // const person1 ={
    //     firstName: 'john',
    //     lastName : 'doe'
    // }

    // document.getElementById("demo").innerHTML = person.fullName.apply(person1)


    //bind()

    // const person = {
    //     firstName :'john',
    //     lastName : 'doe',
    //     fullName : function(){
    //         return this.firstName + " " + this.lastName;
    //     }
    // }

    // const member = {
    //     firstName:'my',
    //     lastName : 'name'
    // }
    // let fullName = person.fullName.bind(member)
    // document.getElementById('demo').innerHTML = fullName()


  //concat


//   let text1='hello'
//   let text2 = 'world'
//   let text = 'power'
//   let result = text1.concat(' ',text,' ',text2)

//   document.getElementById('demo').innerHTML = result

//optional-chaining

// const obj ={
//     person: 'hello',
//     name : 'rizwan'
         
    
// }
//  let element = obj?.match?.hello
//  console.log(element);
 

//set time out 

// console.log('hello');
// setTimeout(()=>{
//     console.log('hiiii');
// },1000)

// console.log('hoiio');

//call back

// console.log('first');

// function getDataFromApi(callback){
//     setTimeout(() => {
//         callback('hello world')
//     },3000);
// }
// getDataFromApi((value)=>{
//     console.log(value);
// })

// console.log('second');

//promise resolve

// const promise = new Promise((resolve,reject)=>{
//    setTimeout(() => {
//     resolve('success!')
//    }, 3000);
// })
// promise.then((response)=>{
//     console.log(response);
// })

// promise reject

// const promise = new Promise((resolve,reject)=>{
//     reject('failed!')
//  })
//  promise.then((response)=>{
//      console.log(response);
//  }).catch((error)=>{
//     console.log(error);
//  })

// promise all 

/*
const promise1 = new Promise((resolve,reject)=>{
    resolve(['java','java script'])
})
const promise2 = new Promise((resolve,reject)=>{
    resolve(['angular','react'])
    // reject("API Failed!")
})

const allPromise = Promise.all([promise1,promise2])
allPromise.then((res)=>{
    console.log(res);
})
.catch((error)=>{
      console.log(error);
})
*/

//promise allsettled


// const promise1 = new Promise((resolve,reject)=>{
//     resolve(['java','java script'])
// })
// const promise2 = new Promise((resolve,reject)=>{
//     // resolve(['angular','react'])
//     reject("API Failed!")
// })

// const allPromise = Promise.allSettled([promise1,promise2])
// allPromise.then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{
//       console.log(error);
// })


//promise any 

// const promise1 = new Promise((resolve,reject)=>{
//         // resolve(['java','java script'])
//         reject("API Failed!")
//     })
//     const promise2 = new Promise((resolve,reject)=>{
//         resolve(['angular','react'])
//         // reject("API Failed!")
//     })
    
//     const allPromise = Promise.any([promise1,promise2])
//     allPromise.then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//           console.log(error);
//     })

    //promise race


    // const promise1 = new Promise((resolve,reject)=>{
    //     // resolve(['java','java script'])
    //     reject("API Failed!")
    // })
    // const promise2 = new Promise((resolve,reject)=>{
    //     resolve(['angular','react'])
    //     // reject("API Failed!")
    // })
    
    // const allPromise = Promise.race([promise1,promise2])
    // allPromise.then((res)=>{
    //     console.log(res);
    // })
    // .catch((error)=>{
    //       console.log(error);
    // })


    //Async-await


    // const promise = new Promise((resolve,reject)=>{
    //     setTimeout(() => {
    //          resolve(['java','java script'])
    //     }, 2000);
       
    // })
    // const promise1 = new Promise((resolve,reject)=>{
    //     // resolve(['c++','java script'])
    //     reject('failed!')
    // })
    // const promise2 = new Promise((resolve,reject)=>{
    //     resolve(['node','angualar'])
       
    // })

    // async function fetchData(){
    //     const response = await promise
    //     console.log(response);
    // }
    // fetchData()
    // const  fetchData1=async()=>{
    //     const response = await promise1
    //     console.log(response);
    // }
    // fetchData1()

    // const fetchData2 = async()=>{
    //     try{
    //             const response = await promise2
    //             console.log(response);
    //     }catch(error) {
    //         console.log(error);
    //     }
    // }
    // fetchData2()
    //  const promise5 = new Promise((resolve,reject)=>{
    //     setTimeout(() => {
           
    //     resolve(['hello', 'world'])
   
    //     }, 2000);
    
    // })
    // const fetchData5 = async()=>{
       
    //     try{
    //         const response = await promise5
    //         console.log(response);
    //     }catch(error){
    //         console.log(error);
    //     }
            
    // }
    // fetchData5()


    //deep copy


    // const obj = {
    //     name : 'rizwan',
    //     place : 'iritty',
    //     address:{
    //         city: 'kannur'
    //     }
    // }
    
    // const deepCopy = JSON.stringify(obj)
    // obj.name = 'rizn';
    // console.log(deepCopy);

    //shallow copy 

    // const obj ={
    //     name : 'fayad ',
    //     age : 18,
    //     place:{
    //         city: 'alappy'
    //     }
    // }
     
    // const shallowCopy = Object.assign({},obj)
    // obj.name='fayu';
    // obj.place.city = 'kannur'
    // console.log(shallowCopy);

    // function makeCounter() {
    //     let count = 0;
    //     return function() {
    //         count++;
    //         return count;
    //     };
    // }
    
    // const counter = makeCounter();
    // console.log(counter()); // 1
    // console.log(counter()); // 2
    
    // do - while

    // let count=10
    // do {
    //     console.log(count);
    //     count++
    // }while(count<20)

//     function sum(a,b){
//         return(a+b)
//     }
//    let result = sum(10,20)
//    console.log(result);

//math obj
// let a = 100
// let b = -15

// console.log(Math.sqrt(a));
// console.log(Math.abs(b));
// console.log(Math.min(10,20,3,40));
// console.log(Math.max(10,20,3,40));
// console.log(Math.pow(2,2));  //square
// let c = 5.9
// console.log(Math.floor(c)); //round off
// console.log(Math.ceil(c)); //round off
// console.log(Math.round(c)); //round off

//random 

// let a = Math.random()
// let x = Math.floor(a*100)
// console.log(x);

// let number = (num)=>{
//     if(num>0){
//         console.log('possitive');
//     }else{
//         console.log('negative');
//     }
// }
// number(-100)

// let sum = (a,b)=>console.log(a+b);
// sum(10,20)

//oops

// class car {
//     constructor(name,color,price){
//         this.name=name
//         this.color=color
//         this.price= price

//     }
//     //protoype

//     carDetails(){
//         console.log('car :'+this.name);
//         console.log('color :'+this.color);
//         console.log('price :'+this.price);
        
//     }
//     showPrice(){
//         console.log('price of '+ this.name + ' is '+ this.price);
//     }
// //static method

//      static message(){
//         console.log('it a static method ');
//      }
    
// }
 
// let c1 = new car('bmw','red',5000000)
// let c2 = new car('toyota','black',150000)
// // console.log( c1);
// // console.log(c2.name);
// // c1.carDetails()
// // c1.showPrice()
// // car.message()

//     class sportsCar extends car{

//     }
     
//     let sc1 = new sportsCar('supra','black',10000000)

//     sc1.carDetails()
//     sc1.showPrice()
//     sportsCar.message()

//teimplate litteral(` backtick)

//variable
// let name = 'rizwan'
// let age = 21

// console.log(`my name is ${name} iam ${age} years old` );


//expression

// let a = 10
// let b = 100

// console.log(`sum of a and b is ${a+b}`);

//multiline

// console.log(`iam rizwan,
// iam 21years old  
//     `);

// for of loop

// let num =[1,2,3,4,5]

// for(let x of num){
//     console.log(x+10);
// }

// rest operator

//  function sum(num1,num2, ...nums){
//     let sum=0;
//     for(let x of nums){
//         sum +=x;
//     }
//     console.log(num1+num2+sum);
//  }
//  sum(10,20,5,50,40) 




 
// let arr = [1,2,3,4,1,2,5]

// function removeDuplicate(arr){
//     let result = [];

//     for(let i=0;i<arr.length;i++){
//         let isDupli = false;
//         for(let j=0;j<result.length;j++){
//             if(arr[i]===result[j]){
//                 isDupli = true;
//                 break;
//             }
//         }
//         if(isDupli==false){
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// console.log(removeDuplicate(arr));



// function findUnique(arr){
    
// let arunq =[]
//     for(let i=0;i<arr.length;i++){
//         let isUnq = true;
//         for(let j=0;j<arr.length;j++){
//             if(i !== j && arr[i] === arr[j]){
//                 isUnq = false;
//                 break;
//             }
//         }
//         if(isUnq == true){
//             // arunq.push(arr[i])
//             return arr[i]
            
//         }
//     }
//     return arunq.length>0?arunq:-1;
// }

// console.log(findUnique(arr));



// let arr = [2,3,4,5,6,1];


// function secondLargest(arr){
//     if(arr.length < 2) return 'not possible';

//     let large = -1;
//     let secondLarge = -1;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > large){
//             secondLarge = large;
//             large = arr[i]
//         }else if(arr[i] >secondLarge && arr[i] !== large){
//             secondLarge = arr[i]
//         }
//     }
//     return secondLarge === -1 ? "no sec lg ":secondLarge
// }

// console.log(secondLargest(arr));


// let a = 2;
// let b = 4;
// let c = 1;


// let res = ()=>{
//     return (a>b)?(a>c?a:c):(b>c?b:c)
// }

// console.log(res());


function sort(arr){


    for(let i=0;i<arr.length;i++){
        let temp ;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp = arr[i];
                arr[i]=arr[j];
                arr[j] = temp;
            }
        }
        
    }
    return arr

}

let arr = [2,3,1,4,5]
console.log(sort(arr));
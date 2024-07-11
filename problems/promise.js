

// const p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('promises resolved')
//     }, 3000);
// })
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('promises resolved again')
//     }, 5000);
// })

// // async function name1 (){
// //     const link = await p
// //     console.log(link);
// //     const val1 =await p1
// //     console.log(val1);
// // }
// // name1()

// async function pro(){

//     // console.log('hellooo');
//     try{
//          const val = await p;
//          console.log('hiii');
//     console.log(val);

//     const val1 = await p1;
//     console.log(val1);
//     }
//     catch(err){
//         console.log(err);
//     }
   
// }
// pro()

function sum(a,b){
    return a+b
}

const pro1 = new Promise((resolve,reject)=>{
    resolve(sum(10,20))
})

async function hee(){
    const neww = await pro1
    console.log(neww);
}
hee()




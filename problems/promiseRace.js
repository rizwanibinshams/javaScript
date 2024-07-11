const promise = new Promise((resolve,reject)=>{
   
   //resolve(['angular','react'])
    reject("API Failed!")
})

const promise1 = new Promise((resolve,reject)=>{
    resolve(['javaScript','css'])
    // reject("API Failed!")
})

const allPromise = Promise.race([promise,promise1])

allPromise.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


// which one is fist resolve that will print first
//they did't check next values
// if first promise have no value then it will go for next promise
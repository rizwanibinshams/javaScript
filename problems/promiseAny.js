const promise = new Promise((resolve,reject)=>{
     //resolve(['java','css','c++'])
    reject('api failed')
})
const promise2 = new Promise((resolve,reject)=>{
    resolve(['angular','react'])
    // reject('api failed again')

})

// const anyPromise = Promise.any([promise,promise2])
// anyPromise.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

//any promise resolved then it will print

const proany = Promise.any([promise,promise2])

proany.then((res)=>{
    console.log(res);
})
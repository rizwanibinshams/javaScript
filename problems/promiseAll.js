const promise = new Promise((resolve,reject)=>{
    resolve(['java','python','css'])
})
const promise2 = new Promise((resolve,reject)=>{
    resolve(['angular','react'])
    //reject(['hello','world']) // if it reject the program will show error
    
})

const allPromise = Promise.all([promise,promise2])

allPromise.then((res)=>{
    console.log(res);
})

//if all promises are resolve then it will work

 //eg 2
const hell = new Promise((resolve,reject)=>{
    resolve(['hiiii'])
})
const hell0 = new Promise((resolve,reject)=>{
    resolve(['hooo'])
})

const all = Promise.all([hell,hell0])
all.then((res)=>{
    console.log(res);
})
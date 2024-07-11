
//normal example

const promise = new Promise((resolve,reject)=>{
    resolve(['java','javascript'])
})

async function fetchData(){
    const response = await promise
    console.log(response);
}
fetchData()

//example with settime out 

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
         resolve(['hello','java'])
    }, 3000);
   
})

async function fetchOf(){
    console.log('hi all');
    const res = await promise1  //if anything you wrote after await 
                                    // it will wait for execution of 
                                     //await function
   
    console.log(res); 
    console.log('buhha');  
}
fetchOf()

//example with try and catch

const promise2 = new Promise((resolve,reject)=>{
    // resolve(["iam ",'here'])
    reject('rejected')
})

const data = async()=>{
    try{
        const res = await promise2
        console.log(res);
    }catch(err){
        console.log(err);
    }

}
data()





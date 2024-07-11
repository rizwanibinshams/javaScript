
console.log('first');

function getApi(value){
    setTimeout(() => {
        console.log('third');
    }, 2000);
}
getApi((value)=>{
    console.log(value);
})
console.log("second");

function callBack(value){
    setTimeout(() => {
        console.log('printed');
    }, 1000);
    
}

callBack((value)=>{
    console.log(value);
})

//  let btn = document.getElementById('hello')

//  btn.addEventListener('click',myFunction)

//  function myFunction(){
//     alert('hellooo')
//  }


function doIt(a,b,callBack){
    const result = a + b
    callBack(result)
}

function show(result){
    console.log(`the result is ${result}`);
}


doIt(2,3,show)
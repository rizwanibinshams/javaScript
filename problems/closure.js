
// function outer(){
//     let a =20;
// function inner(){
//    console.log(a);
// }
// return inner;

// }
 

// let close = outer()
// close()

//eg 2
//  function outest(c){
    
//     function outer(a){
       
//     function inner(){
//        console.log(a+c);
//     }
//     return inner;
    
//     }
//    return outer;     
//  }
//  let close = outest(10)(20)
//  close()


//  function one(){
//     let a =10;
//     function  two(){
//         let b =30
//         function three(){
//             console.log(a,b);
//         }
//         return three;
//     }
//     return two;
//   }
//  let out = one()()
//  out() 

 function hii(){
    let name = 'riz'
    function hello(){
        console.log(name);
        
    }
       return hello()
}
hii()
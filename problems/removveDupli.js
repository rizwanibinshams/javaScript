 
 
//  function remove(arr){
//     return[...new Set(arr)] //if you pass arr to set it only store 
//                            //unique values
//  }

//  console.log(remove([1,2,2,3,2,1,4,5]));


 let arr3 =[1,2,3,1,2,22,11,3,4,5,6,4]

//  function unique(a){
//    let varr=  [...new Set(a)]
//    return varr.sort((a,b) => a-b)
//  }

//  console.log(unique(arr3)); 

 for(let i=0;i<arr3.length;i++){ 
   let count = 0;
   for(let j=i+1;j<arr3.length;j++){
      if(arr3[i]==arr3[j])
         {
            count++
         }
        
   }
   if(count==0){
      arr3.sort((a,b)=>a-b)
      console.log(arr3[i]);
   }
 } 
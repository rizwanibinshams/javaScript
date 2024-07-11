function*generator(){
    yield 1;
    yield 2;
}
let out = generator()

console.log(out.next());
console.log(out.next());
console.log(out.next());

let arr = [1,2,3,4,5]

for(let x of arr){
    let multi = arr[x-1]*2;
    console.log(multi);
}


    
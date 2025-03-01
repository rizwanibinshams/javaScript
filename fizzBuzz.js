

function fizzBuzz(n){
    for(let i=0;i<n;i++){
        let out = "";

        if(i%3==0) out += "Fizz";
        if(i % 5 == 0) out += "Buzz";

        console.log(out === "" ? i : out);
    }
}

fizzBuzz(20)
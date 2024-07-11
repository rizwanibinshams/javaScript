

function longest(str){
    const words = str.split(' ')
    let long = '';

    for(const x of words){
        if(x.length > long.length){
            long = x
        }
    }
    return long;
}

console.log(longest('hey iam rizwan from kannur'));



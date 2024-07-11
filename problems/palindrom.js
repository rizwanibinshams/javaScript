


function pallindrom(str){
    let reversed =str.split('').reverse().join('')
    return str ===reversed
    
}

console.log(pallindrom('malayalam'));


var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let rev = str.split("").reverse().join("");
    return (str == rev) ? true : false;
};
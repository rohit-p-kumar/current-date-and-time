// Differnece between a given number

function difference(n) {
    if(n <= 13){
        return(13-n);
    } else {
        return(n-13)*2;
    }
}

console.log(difference(30));
console.log(difference(12));


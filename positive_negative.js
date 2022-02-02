// To check whether the given integers are positive or negative

function positive_negative(x,y) {
    if(x > 0 && y < 0 || x < 0 && y > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(positive_negative(5,5));
console.log(positive_negative(5,-5));
console.log(positive_negative(-5,5));
console.log(positive_negative(-5,-5));
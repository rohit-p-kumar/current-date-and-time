// Check two given numbers and return true if one of the number is 50 or if their sum is 50

function test(x,y) {
    return ((x == 50 || y == 50) || (x+y == 50));
}

console.log(test(50,20));
console.log(test(20,20));
console.log(test(70,20));
console.log(test(50,50));

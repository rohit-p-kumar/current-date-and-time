function test(x){
    return ((Math.abs(100-x) <= 20)); //|| (Math.abs(400-x) ));
}

console.log(test(90));
console.log(test(10));
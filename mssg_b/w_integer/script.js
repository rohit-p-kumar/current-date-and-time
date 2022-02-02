// Get a random integer from 1 to 10.

const num = Math.ceil(Math.random() * 10); // Declared a const to get a random number from 1 to 10
console.log(num);

const gnum =  prompt("Guess the number between 1 and 10 inclusive");

if(gnum == num){ // If gnum and num are the same , will display "Matched"
    console.log("Matched");
} else{
    console.log("Not matched, the number was "+gnum);
}


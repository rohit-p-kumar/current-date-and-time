//To find the 1st day between the year 2014 and 2050 is Sunday

console.log("-----------");
for(var year = 2014; year <= 2050; year++){ // Applied a for loop b/w the year 2014 and 2050
    var d = new Date(year, 0, 1); 

    if(d.getDay() === 0){ // If statement to verify the 1st day of the year is Sunday.
        console.log("1st January is being a Sunday " + year);
    }
}
console.log("----------");
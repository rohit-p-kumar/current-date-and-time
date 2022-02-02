function leapyear(year) // Declaring a function to find the leapyear
{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);// Applied a terninary operator to find the leap year
}

console.log(leapyear(2000));

// Another method to check whether the year is leapyear or not
    
    // const is_leapyear = year => new Date(year, 1, 29).getMonth() === 1; 

    // console.log(is_leapyear(2020));
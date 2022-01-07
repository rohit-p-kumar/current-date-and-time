// Displaying  current time and current date //

 var today = new Date();

 var day = today.getDay();

 var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 console.log("Today is : " + daylist[day] + "-"); // Displays the current date. // 

var hour = today.getHours();
 
 var minute = today.getMinutes();
 
 var second = today.getSeconds();
 
 var prepand = (hour >= 12)? " PM ":" AM ";

 hour = (hour >= 12)? hour - 12: hour;

 // To display whether the current time is at noon or in PM //
 if (hour === 0 && prepand === ' PM ') 
 {
     if(minute === 0 && second === 0) {
         hour = 12;
         prepand = 'Noon'; 
     }
     else {
         hour = 12;
         prepand = ' PM ';
     }
 } 
 // To display whether the current time is at midnight or in AM //
if (hour === 0 && prepand === ' AM ') {
    if(minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight ';
    }
    else {
        hour = 12;
        prepand = ' AM ';
    }
}

console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

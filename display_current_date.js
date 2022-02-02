// To display the current date //


var today = new Date();

var dd = today.getDate();

var mm = today.getMonth()+1;

var yyyy = today.getFullYear();

if (dd<10) { // Declaring the function to get the current date //
    dd = '0' + dd;
}

if (mm<10) { // Declaring the function to get the current month //
    mm = '0' + mm;
}

today = mm + '-' + dd + '-' + yyyy;
console.log(today);
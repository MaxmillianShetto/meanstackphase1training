//alert('done')



// function info () {
//     alert("welcome to user - defined function");
// }

// info()

// function add(a,b) {
//     var sum  = (a+b);
//     alert("The sum is " + sum);
// }

// add(100,200);
// add(1,2);
// add(10,20);
// add("Maxmillian", "Shetto");

// function sayHello(name) {
//     return "Welcome to user defined functions " + name;
// }

function addNumber(a,b) {
    alert("called...");
    var length = addNumber.arguments.length;
    alert("Number of arguments " + length);
    var sum = 0;
    for (var i = 0; i < length; i++){
        sum = sum + addNumber.arguments[i];
    }
    alert("sum is " + sum);
}

addNumber(10,20);
addNumber(10);
addNumber();
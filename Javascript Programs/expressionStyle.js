function add(a,b){
    var total = a+b;
    document.write("Sum is " + total + "<br/>")
}

// Expression style with name
var sumOfNumber = function addNumber(a,b){
    var sum = a+b;
    document.write("Sum of 2 numbers is " + sum);

}
sumOfNumber(5,10);

// Expression style with no name
var sumOtherNumbers = function (a,b){
    var sum = a+b;
    document.write("<br/> Sum of 2 numbers is " + sum);

}
sumOtherNumbers(5,10);

// IIFE immediately Invoked Function Expression
(function(){
    document.write("<br/>This is empty IIFE function style")
})();

(function(a,b){
    var sum=a+b;
    document.write("<br/>This is empty IIFE function style. Sum is " + sum)
})(5,5);
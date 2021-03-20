// user defined callback function
function sayHello(fname, callback){
    return "Welcome " + callback(fname);
}

var maleInfo = function(name){
    return "Mr " + name;
}
var femaleInfo = function(name){
    return "Miss " + name;
}

document.write(sayHello("Max", maleInfo));


// creating array using ES5
var num = [10,20,10,20,30,30];
document.write(num);
document.write("for each");

var dis = function(n){
    document.write("<br/> Value is " + n);
}
num.forEach(dis);

document.write("<br/>Using foreach withanonymous function");
num.forEach(function(n){
    document.write("<br/> Value is " + n);
});
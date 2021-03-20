var dis1 = function(){
    document.write("This is an expression style function ...");}
dis1();

var dis2 = ()=> document.write("<br/>This is arrow function");
dis2();

var sum = function(a,b){
    return a+b;
}
document.write("<br/>Sum of 2 numbers using expression style " + sum(10,15));

// By default arrow functions return without return keyword
var add = (a,b) => a+b;
document.write("<br/>Sum of 2 numbers using arrow functions " + add(10,35));

var largest1 = function(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
document.write("<br/>Largest using expression functions " + largest1(10,6));
var largest2 = (a,b) => {
    if(a>b){
        return a;
    }else{
        return b;
    }
}
document.write("<br/>Largest using arrow functions " + largest2(10,35));
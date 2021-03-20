/*// // ES5 style
// function Employee(){ // pascal naming rule
//     this.name = "Max"; // This is a keyword
//     this.age = 21;
//     this.displayEmpInfo = function(){
//         document.write("<br/>Name is " + this.name);
//         document.write("<br/> Age is " + this.age);
//     }
// }

// // Employee();
// var emp1 = new Employee();
// emp1.displayEmpInfo();
// document.write("Accessing values outside the object:")
// document.write("<br/>Name is " + emp1.name);
// document.write("<br/> Age is " + emp1.age);


// Parameterized

function Employee(name,age){ // pascal naming rule
    this.name = name; // This is a keyword
    this.age = age;
    this.displayEmpInfo = function(){
        document.write("<br/>Name is " + this.name);
        document.write("<br/> Age is " + this.age);
    }
}

var emp1 = new Employee("James", 24);
var emp2 = new Employee("Jane", 21);
emp1.displayEmpInfo();
emp2.displayEmpInfo();
*/

// Adding runtime properties as well as functionality to user defined
/*
function Employee(name,age){ // pascal naming rule
    this.name = name; // This is a keyword
    this.age = age;
    this.displayEmpInfo = function(){
        document.write("<br/>Name is " + this.name);
        document.write("<br/> Age is " + this.age);
    }
}

var emp1 = new Employee("James", 24);
var emp2 = new Employee("Jane", 21);
emp1.displayEmpInfo();
emp2.displayEmpInfo();
Employee.prototype.desg="Tester"; // creating a property
document.write("<br/> Emp1 desg property " + emp1.desg);
document.write("<br/> Emp2 desg property " + emp2.desg);
Employee.prototype.changeDesg = function(desg){
    this.desg = desg;
}
emp1.changeDesg("Developer");
document.write("<br/> Emp1 desg property changed to  " + emp1.desg);
*/

// ES5 style inheritance
// function Employee(name,age){ // pascal naming rule
//     this.name = name; // This is a keyword
//     this.age = age;
//     this.displayEmpInfo = function(){
//         document.write("<br/>Name is " + this.name);
//         document.write("<br/> My age is " + this.age);
//     }
// }

// function Manager(numberOfEmp){
//     this.numberOfEmp = numberOfEmp;
//     this.displayMgrInfo = function(){
//         document.write("<br/> Number of employees under him"+this.numberOfEmp)
//     }
// }


// var emp1 = new Employee("Max", 24);
// emp1.displayEmpInfo();
// // Object.property = Object.create(object you are inheriting from) 
// Manager.prototype = Object.create(emp1);
// var mgr1 = new Manager(12);
// mgr1.displayEmpInfo();
// mgr1.displayMgrInfo();

// var mgr2 = new Manager(11);
// mgr2.displayEmpInfo();
// mgr2.displayMgrInfo();

// Second way to perform inheritance on an object

function Employee(name,age){ // pascal naming rule
    this.name = name; // This is a keyword
    this.age = age;
    this.displayEmpInfo = function(){
        document.write("<br/>Name is " + this.name);
        document.write("<br/> My age is " + this.age);
    }
}

function Manager(name,age,numberOfEmp){
    Employee.call(this,name,age); // Pass name and age to this object
    this.numberOfEmp = numberOfEmp;
    this.displayMgrInfo = function(){
        document.write("<br/> Number of employees under me "+this.numberOfEmp)
    }
}

var mgr1 = new Manager("Max", 40, 5);
mgr1.displayEmpInfo();
mgr1.displayMgrInfo();
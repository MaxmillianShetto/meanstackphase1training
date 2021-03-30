// alert("Welcome to BOM hierarchy");
// window.alert("Welcome to BOM hierarchy");
// var fname = prompt("Enter your name");
// var lname = window.prompt("Enter last name");
// alert("Name is " + fname);
// window.alert("Name is " + lname);
var myWin;
// another way of redirecting to another page in javascript
function openPage() {
    //window.open("home.html","","width=500px, height=300px,left=500px,top=300px");
    myWin = window.open("abc","","width=500px, height=300px,left=500px,top=300px");
    myWin.document.write("This is my window.");
}

function closePage() {
    myWin.close();
}
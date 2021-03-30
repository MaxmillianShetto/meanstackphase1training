var obj;
function fun() {
    var accno = document.getElementById("accid").value;
    obj= new XMLHttpRequest();
    alert("object loaded...");
    obj.open("GET","URL?key=" + accno);
    obj.onreadystatechange=callback;
    obj.send();
}
function loadObject() {
    obj= new XMLHttpRequest();
    alert("object loaded...");
    obj.open("GET","demo.txt");
    obj.onreadystatechange=callback;
    obj.send();
}
// obj.readyState
// 0 : not initialized
// 1 : ready to send the request to page
// 2 : send
// 3 : processing
// 4 : ready to give response

// obj.status
// 100 : information
// 200 : success
// 300 : redirection from one page to another page
// 400 : client side error 
// 500 : server side error
function callback() {
    if(obj.readyState == 4) {
        console.log(obj.responseText);
    }
}
// document.write("1st statement");
// document.write("<br/>2nd statement");
// document.write("<br/>3rd statement");

document.write("1st statement");
setTimeout(function(){
    //document.write("<br/>2nd statement printed asynchronously");
    document.getElementById("info").innerHTML="2nd statement printed asynchronously";
},2000);
var i=0;
var obj = setInterval(function() {
    document.getElementById("data").innerHTML="Hi" + "the value of i is " + i;
    if(i%2==0){
        // document.bgColor="red";
        document.getElementById("imageId").src="gmail.jpg";
        document.getElementsByTagName("p")[0].style.color="Red";
    }else{
        // document.bgColor="green";
        document.getElementById("imageId").src="google.png";
        document.getElementsByTagName("p")[0].style.color="lightgreen";
    }
    i++;
}, 1000);
document.write("<br/>3rd statement");

function stop() {
    clearInterval(obj);
}
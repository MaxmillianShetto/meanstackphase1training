function validate() {
    // alert("fun called ...");
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if(user.length == 0){
        alert("user name is required");
        return false;
    } else if (pass.length == 0) {
        alert("password is required");
        return false;
    } else {
        return true;
    }
}
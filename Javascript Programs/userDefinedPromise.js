// server code
var obj = new Promise((resolve,reject) => {
    resolve("successfully done the task"),
    reject("Failure because of some reason")
});

// it return success or failure.

// Then and catch take callback function as a parameter
// then will execute if promise resolve successfully
// else catch executes if promise reject.
// obj.then(data=>document.write(data)).catch(error=> document.write(error));

function loadData() {
    var main = document.getElementById("main");
    fetch("https://jsonplaceholder.typicode.com/todos").
    then(data=>data.json()).
    then(result=>{
        var info = result.map(obj => obj.title)
        main.innerHTML = info;
    }).
    catch(e=>console.log("In catch " + e));
}
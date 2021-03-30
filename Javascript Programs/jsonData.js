var stringData ='{"id":100,"name":"Ravi","skillSet":["java","angular","python"],"address":{"city":"Dar es salaam","country":"Tanzania"}}';
document.write("data in string format<br/>");
document.write(stringData);
document.write("<br/>");
document.write("id is "+ stringData.id);
document.write("<br/>name is "+ stringData.name);
// convert string to json
var jsonData = JSON.parse(stringData);
document.write("<br/>After conversion");
document.write("<br/>id is " + jsonData.id);
document.write("<br/>name is " + jsonData.name);
document.write("<br/>Technology used " + jsonData.skillSet[2]);
document.write("<br/>City is " + jsonData.address.city);
// convert  json to string
var stringDataInfo = JSON.stringify(jsonData);
document.write("<br/> After converted");
document.write("<br/>Id is " + stringDataInfo.id); // it will return undefined since stringDataInfo is a string and not an object
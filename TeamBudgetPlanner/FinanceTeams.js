
var progObj = [];
function storeInSession() {
    sessionStorage.setItem("progInfo", JSON.stringify(progObj));
}
function onFormSubmit() {
    
    var data = readFormData();
    
    progObj.push(data);      
    storeInSession();
}
function resetData() {
    document.getElementById("cname").value = "";
    document.getElementById("pname").value = "";
    document.getElementById("budget").value = "";
}
function readFormData() {
    var obj = {}    
    obj.cname = document.getElementById("cname").value;
    obj.pname = document.getElementById("pname").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);
    return obj;
}

document.addEventListener("DOMContentLoaded", function (event) {
    retrieveFromSession();
});
function retrieveFromSession() {
    var obj = sessionStorage.getItem("progInfo");
    console.log(obj);
    var q1 = JSON.parse(obj);
    console.log(q1);
    insertNewRecord(q1);
    calTotal(q1);
}
function calTotal(q1) {
    var sum = 0;
    q1.forEach(element => {
        sum = sum + parseInt(element.budget);
    });
    console.log(sum);
    document.getElementById('total').innerText = sum
}
function insertNewRecord(data) {
    console.log(data);
    var table = document.getElementById("finance_table")
    var body = table.getElementsByTagName("tbody");
    for (let index = 0; index < data.length; index++) {
        const element = body[0];
        var newRow = element.insertRow(0);
        if (data[index]) {
            var cell1 = newRow.insertCell(0);          
            cell1.innerHTML = data[index].cname;
            var cell2 = newRow.insertCell(1);          
            cell2.innerHTML = data[index].pname;       
            var cell2 = newRow.insertCell(2);          
            cell2.innerHTML = data[index].budget;
        }
    }
}
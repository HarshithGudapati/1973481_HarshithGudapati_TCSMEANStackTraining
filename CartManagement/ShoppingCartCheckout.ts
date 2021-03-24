
var progObj:any = [];
function storeInSession() {
    sessionStorage.setItem("progInfo", JSON.stringify(progObj));
}
function onFormSubmit() {
    console.log('hits here');
    var data = readFormData();
    progObj.push(data);
    storeInSession();
}
function readFormData() {
    var obj:any = {}
    let cname = (<HTMLInputElement>document.getElementById("cname")).value;
    obj.cname= cname;
    let budget = (<HTMLInputElement>document.getElementById("budget")).value;
    obj.budget=budget;
    
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
    let sum:number = 0;

    q1.forEach(element => {
        sum = sum + parseInt(element.budget);
    });
    console.log(sum);
    document.getElementById('total').innerText = sum.toString()
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
            cell2.innerHTML = data[index].budget;
        }
    }
}
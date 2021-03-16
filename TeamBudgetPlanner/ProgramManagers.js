
var progObj =[];
function storeInSession() {
    sessionStorage.setItem("progInfo",JSON.stringify(progObj));
}


function onFormSubmit(){
    //alert("Event generated...")
    var data = readFormData();
    //insertNewRecord(data);
    progObj.push(data);      //in empObj
   storeInSession();
    
}

function resetData() {
    document.getElementById("cname").value="";
    document.getElementById("pname").value="";
    document.getElementById("budget").value="";
    }

function readFormData() {
    var obj = {}    // empty object
    obj.cname = document.getElementById("cname").value;
    obj.pname = document.getElementById("pname").value;
    obj.budget = document.getElementById("budget").value;

    console.log(obj);
    return obj; 
}



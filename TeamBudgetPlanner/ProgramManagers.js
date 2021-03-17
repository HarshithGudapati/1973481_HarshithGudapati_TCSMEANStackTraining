
var progObj =[];
function storeInSession() {
    sessionStorage.setItem("progInfo",JSON.stringify(progObj));
}

function onFormSubmit(){
    
    var data = readFormData();
    
    progObj.push(data);      
   storeInSession();
    
}

function resetData() {
    document.getElementById("cname").value="";
    document.getElementById("pname").value="";
    document.getElementById("budget").value="";
    }

function readFormData() {
    var obj = {}    
    obj.cname = document.getElementById("cname").value;
    obj.pname = document.getElementById("pname").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);
    return obj; 
}

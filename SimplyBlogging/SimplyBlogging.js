var simObj =[];
function storeInSession() {
    localStorage.setItem("simInfo",JSON.stringify(simObj));
}

function retrieveSession() {
  var str =  localStorage.getItem("simInfo");
  console.log(str)
    var arr = JSON.parse(str);
    arr.forEach(element => {
        displayData(element);
    });
}

function onFormSubmit(){
    var data = readFormData();
    simObj.push(data);      
   storeInSession();
   displayData(data);
    
}
function readFormData() {
    var obj = {}    
    obj.title = document.getElementById("title").value;
    obj.article = document.getElementById("article").value;
    obj.image = document.getElementById("avatar").files[0].name;
    console.log(obj);
    return obj; 
}

function displayData(element){
    var row = document.getElementById("details");
    var col = document.createElement('div');
    col.className = 'col-md-4';
    var title = document.createElement('h2');
    title.innerHTML = element.title
    col.appendChild(title);
    var articlebody = document.createElement('p');
    articlebody.innerHTML = element.article;
    col.appendChild(articlebody);
    var image = document.createElement('img');
    image.src = element.image;
    image.style.width = '100%';
    col.appendChild(image)
    row.appendChild(col);
}
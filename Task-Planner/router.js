const fs = require("fs");
const url = require("url");
var qs = require('querystring');

const Task1 = require('./Task-planner.js'); 

function renderPage(path, res){
    fs.readFile(path, null, (err, data) => {
        if(err){
            res.writeHead(404);
            res.write('File not found!');
        }else{
            res.write(data);
        }
        res.end();
    });
}

function renderTaskPage(path, res){

    let t1 = fs.readFileSync(path, 'utf-8');

    Task1.fetchAll(td => {
        if(td){
            let tableStart = '<table>';
            tableStart += '<tr><th> Task Id</th><th>Emp Id</th><th> Task </th><th> Deadline </th></tr>';
            let tableEnd = '</table>'
            let htmlStr = tableStart;
            for(tp of td){
                htmlStr += "<tr><td>" +  tp.taskId + "</td><td>" +  tp.empId +"</td><td>"+ tp.taskName + "</td><td>"+ tp.deadLine + "</td></tr>"     
            }
            htmlStr += tableEnd;
            t1 = t1.replace("tableData", htmlStr);
        }else{
            t1 = t1.replace("tableData", "No tasks available");    
        }
       
        res.write(t1);
        res.end();   
    });
    
}

const requestHandler = (req, res) =>{
    //const url = req.url;
    const method = req.method;
    const path = url.parse(req.url).pathname;

    res.writeHead(200, {'Content-Type': 'text/html'});

    switch(path){

        case '/':
            renderTaskPage('./show-task.html', res);
            break;
        case '/add-task': 
            if(method === 'POST'){
                const body = [];
                req.on('data', (chunk) => {
                    body.push(chunk);
                });
                req.on('end', () => {
                    const parseBody = Buffer.concat(body).toString();
                    console.log("data encoded data :", parseBody);
                    const fdata = qs.parse(parseBody) //query string parser
                    console.log("decoded data: ",fdata);  
                    const task = new Task1(fdata.empId, fdata.taskId, fdata.task, fdata.deadLine);
                    task.save();                   
                });               
            }           
            renderTaskPage('./show-task.html', res);
            break;
        case '/show-task':           
            renderTaskPage('./add-task.html', res);
            break;
        default:
            renderPage('./error.html', res);
            break;
    }
}


module.exports = {
    handler: requestHandler
}


  
const fs = require('fs');
const path = require('path');

module.exports = class TaskPlanner {

    constructor(empId, taskId, taskName, deadLine){
        this.empId = empId;
        this.taskId = taskId;
        this.taskName = taskName;
        this.deadLine = deadLine;
    }

    save(){
        const p = path.join(path.dirname(process.mainModule.filename), '/', 'Task-planner.json');
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if(!err){
                products = JSON.parse(fileContent); 
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        })

    }
    static fetchAll(cb){
        const p = path.join(path.dirname(process.mainModule.filename), '/', 'Task-planner.json');
        fs.readFile(p, (err, fileContent) => {
            if(err){
                cb([]);
            }else{
                if(fileContent.byteLength > 0){
                    cb(JSON.parse(fileContent));
                }else{
                    cb([]);    
                }
            } 
        });
    }
}


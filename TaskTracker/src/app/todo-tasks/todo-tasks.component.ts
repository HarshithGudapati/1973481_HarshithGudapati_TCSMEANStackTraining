import { Component, OnInit } from '@angular/core';
import {TodoTasksService} from './../todo-tasks.service'

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {
  progObj: any[] = [];
  id: number = 0;
  name: string = '';
  task: string = '';
  deadline: Date = new Date();
  dataSource = [];
  displayedColumns: string[] = ['id','name','task','deadline'];
  
  
  
  constructor(public empSer:TodoTasksService) { }

  ngOnInit(): void {
    this.getUser();
  }
  
  storeUser(empRef:any){
    console.log(empRef);
    this.empSer.storeEmployee(empRef).
    subscribe(result=>this.getUser(),error=>console.log(error));
  }

  getUser(){
    console.log();
    this.empSer.getEmployee().subscribe(result=>{
      this.dataSource = result;
      console.log(this.dataSource);
      
    },error=>console.log(error) );
  }

}

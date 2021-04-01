import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoTasksService {

  constructor(public http:HttpClient) { }

  storeEmployee(emp:any){
    return this.http.post("http://localhost:3000/employees",emp);
    
  }
  getEmployee(): Observable<[]> {
    
    
    return this.http.get<[]>("http://localhost:3000/employees");
    
  }

}

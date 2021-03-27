import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  progObj: any[] = [];

  storeInSession() {
    sessionStorage.setItem("progInfo", JSON.stringify(this.progObj));
  }

  dataCapture(a) {
    console.log(a);
    var data = this.readFormData();
    this.progObj.push(data);
    this.storeInSession();
  }

  readFormData() {
    var obj: any = {}
    let cname = (<HTMLInputElement>document.getElementById("cname")).value;
    obj.cname = cname;
    let budget = (<HTMLInputElement>document.getElementById("budget")).value;
    obj.budget = budget;
    console.log(obj);
    return obj;
  }
}

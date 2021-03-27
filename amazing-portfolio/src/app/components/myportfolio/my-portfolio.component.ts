import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit {
  progObj: any[] = [];
  contactName: string = '';
  contactNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addDetails(){
    const user = {name: this.contactName, phone: this.contactNumber}
    console.log(user);
    this.progObj.push(user);
  }
  

}

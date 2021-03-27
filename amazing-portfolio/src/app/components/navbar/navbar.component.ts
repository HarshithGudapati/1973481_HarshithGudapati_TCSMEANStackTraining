import { Component, OnInit } from '@angular/core';
import{Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router) { }

  isOpen: boolean=false;

  toggleNavBar()
  {
    this.isOpen=!this.isOpen;
  }


  ngOnInit(): void {
  }
  logout(){
    sessionStorage.removeItem("harshith");
    this.router.navigate(["login"]);
  }

}

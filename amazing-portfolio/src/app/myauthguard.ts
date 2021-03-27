import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()                  
export class MyAuthGaurd implements CanActivate {
    constructor(public router:Router) { }
    canActivate(){ 
        console.log('I came');
          
      let obj = sessionStorage.getItem("harshith");
      if(obj!=null){
          return true;
      }else {
          this.router.navigate(["login"]);
          return false;
      }
    }
}
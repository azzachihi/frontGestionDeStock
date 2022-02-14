import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 /* static user: string =null;
  static userRole :any=null;
  static fname : any=null;
  static lname : any=null;*/

    /*user: string =null;
    userRole :any=null;
    fname : any=null;
    lname : any=null;*/

  constructor(public loginService: AuthenticationService) {
    /*this.user = sessionStorage.getItem('username');
    this.userRole = sessionStorage.getItem('role');
    this.fname = sessionStorage.getItem('name');
    this.lname = sessionStorage.getItem('lname');*/
  }


  ngOnInit(): void {
    //
    /*
    this.user = sessionStorage.getItem('username');
    this.userRole = sessionStorage.getItem('role');
    this.fname = sessionStorage.getItem('name');
    this.lname = sessionStorage.getItem('lname');
    */
  }

}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidLogin = false;

  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {

    this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {

        //solution sans refresh en se basant sur les variables du service
        this.router.navigate(['/listProvider']);
        //solution avec refresh
        ///window.location.href ="listProvider";

        this.invalidLogin = true;
      },
      error => { this.invalidLogin = true }
    )
  }

}
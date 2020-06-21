import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f',{static:false}) loginForm: NgForm;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const usercord = {
      'username': this.loginForm.value.email, 
      'password': this.loginForm.value.password,
     };
  this.authService.signInPerson(usercord).subscribe(
    (data) =>{
      this.authService.initializeLocalStorage(data.token);
      var tokenData = this.authService.getTokenClaims(data.token);
      this.authService.initializerParmatersPerson(tokenData.username, tokenData.roles[0]);
      setTimeout (() => {
        this.router.navigateByUrl('/home');
     }, 2000);
    }
  );
  }

}

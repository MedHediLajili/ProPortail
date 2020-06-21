import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Person } from '../Models/person';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('fu',{static:false}) UserloginForm: NgForm;
  @ViewChild('fd',{static:false}) DoctorloginForm: NgForm;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitDoctor(): void {
    
    var formdata : any = new FormData();
    formdata.append("nom",this.DoctorloginForm.value.nom);
    formdata.append("prenom", this.DoctorloginForm.value.prenom);
    formdata.append("password",this.DoctorloginForm.value.password);
    formdata.append("adresse", this.DoctorloginForm.value.addresse);
    formdata.append("pays",this.DoctorloginForm.value.pays);
    formdata.append("telephone", this.DoctorloginForm.value.phone);
    formdata.append("email",this.DoctorloginForm.value.email);
    formdata.append("dateNaiss", this.DoctorloginForm.value.dateNais);
    formdata.append("dateDip", this.DoctorloginForm.value.dateDip);
    formdata.append("maladie",this.DoctorloginForm.value.maladie);
    formdata.append("adresseCab",this.DoctorloginForm.value.addresseCab);

    this.authService.signUpPerson(formdata).subscribe(
      () => {
        const usercord = {
          'username': this.DoctorloginForm.value.email, 
          'password': this.DoctorloginForm.value.password
         };
        this.authService.signInPerson(usercord).subscribe(
          (data)=>{
       this.authService.initializeLocalStorage(data.token);
       var tokenData = this.authService.getTokenClaims(data.token);
       this.authService.initializerParmatersPerson(tokenData.username, tokenData.roles[0]);
       setTimeout (() => {
         this.router.navigateByUrl('/home');
      }, 2000);
          }
        );
      }
    );

  }

  onSubmitUser(): void {
    var formdata : any = new FormData();
    formdata.append("nom",this.UserloginForm.value.nom);
    formdata.append("prenom", this.UserloginForm.value.prenom);
    formdata.append("password",this.UserloginForm.value.password);
    formdata.append("adresse", this.UserloginForm.value.addresse);
    formdata.append("pays",this.UserloginForm.value.pays);
    formdata.append("telephone", this.UserloginForm.value.phone);
    formdata.append("email",this.UserloginForm.value.email);
    formdata.append("dateNaiss", this.UserloginForm.value.dateNais);
    formdata.append("maladie",this.UserloginForm.value.maladie);
    
    this.authService.signUpPerson(formdata).subscribe(
      () => {
        const usercord = {
          'username': this.UserloginForm.value.email, 
          'password': this.UserloginForm.value.password
         };
        this.authService.signInPerson(usercord).subscribe(
          (data)=>{
       this.authService.initializeLocalStorage(data.token);
       this.authService.getTokenClaims(data.token);
       setTimeout (() => {
         this.router.navigateByUrl('/home');
      }, 2500);
          }
        );
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Person } from '../Models/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: Person ;


  constructor(public authService: AuthService ) {
    var tokeninfo = this.authService.getTokenClaims(localStorage.getItem('access_token'));
    this.authService.getPerson(tokeninfo.username).subscribe(
      (data) =>{
        this.person = data;
      }
    );
  }

  ngOnInit(): void {
  

      }

}

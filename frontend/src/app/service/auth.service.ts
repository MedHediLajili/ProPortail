import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../Models/person';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://127.0.0.1:8000/api';
  personAuthIdentifiant: string;
  personAuthRole: string;
  token: string;
  /*
  exp: 1592702800
  iat: 1592699200
  roles: ["medecin"]
  username: "omaima@gmail.com"
  */
  constructor(private http: HttpClient) { 
  }

  signUpPerson(person: any): Observable<Person> {
    return  this.http.post<Person>(`${this.url}/personne/add`, person);
  }

  signInPerson(adminCor: any): Observable<any> {
    return this.http.post<any>(`${this.url}/login_check`, adminCor);
  }

  getPerson(email: string): Observable<Person> {
    const headers =new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Person>(`${this.url}/personne/email/${email}`, {
      headers: headers
    });
  }

  initializeLocalStorage(token: string): void{
    localStorage.setItem('access_token', token);
  }

  initializerParmatersPerson(email :string, role: string): void{
    this.personAuthIdentifiant = email;
    this.personAuthRole = role;
  }


  AnyOneisLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null ;
  }

  logOut(): void{
    this.token ='';
    this.personAuthIdentifiant= '';
    localStorage.removeItem('access_token');
  }

  getTokenClaims(token: any){
    this.token = token;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var tokenInfo = JSON.parse(window.atob(base64));

    /*
    tokeninfo contient l'identifiant du person authentifié qui est l'email, contient aussi le role du person , cette variable est de la forme suivante
      {exp: 1592702800
      iat: 1592699200
      roles: ["medecin"]    (pour l'acceder au role : tokeninfo.roles[0])
      username: "omaima@gmail.com"
      }
    */

    return tokenInfo;
  
  }
}

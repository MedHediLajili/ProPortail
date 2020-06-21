
  import { Doctor } from './../Models/doctor';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {
  url='http://127.0.0.1:8000';

  constructor(private http : HttpClient) { }

    getAllDoctor(){

      return this.http.get<Doctor[]>(this.url+'/api/medecins')

    }
}

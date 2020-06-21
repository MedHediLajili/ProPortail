
  import { Article } from './../Models/article';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class Articlesrvice {

  url='http://127.0.0.1:8000';

  constructor(private http : HttpClient) { }


  getAllArticles(){

    return this.http.get<Article[]>(this.url+'/api/articles')

  }
}


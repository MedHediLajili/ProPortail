
import { Article } from './../Models/article';
import { Articlesrvice }from './../service/articleservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  list : Article[];
  //list_copy : Article[];


//public articleapi : Articlesrvice
  constructor(private Articlesrvice : Articlesrvice) { }



//this.getAllArticle()
  ngOnInit(): void {

    this.Articlesrvice.getAllArticles()
    .subscribe(Article => this.list = Article);

  }

  /*
    getAllArticle(){
    this.articleapi.getAllArticles()
    .subscribe(
      (data : Article[])=> {
       console.log(data)
       this.list = data
       this.list_copy = data },
      error=> console.log(error)
    )
  }*/

}

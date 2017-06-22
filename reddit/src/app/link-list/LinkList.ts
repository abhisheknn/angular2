import {Component,OnInit} from '@angular/core';
import {Articles} from '../models/articles/Articles'
import {Article} from '../models/article/Article'
import {ArticlesFactory} from '../models/articles/ArticlesFactory'
@Component({
    selector:'link-list',
    templateUrl:'./link-list.component.html',
    styleUrls:['./link-list.component.css']
})

export class LinkList implements OnInit{
constructor(private articlesFactory:ArticlesFactory){

}
 articles:Article[] = this.articlesFactory.getArticles();
 ngOnInit(){

}

upvote(article:Article){
article.upvotes=1;
//console.log(article);
}
downvote(article:Article){
    
    article.downvotes=1;
  //     console.log(article);
}
}


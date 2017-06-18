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
 articles:Article[] = ArticlesFactory.getArticles();
 ngOnInit(){

    }
}


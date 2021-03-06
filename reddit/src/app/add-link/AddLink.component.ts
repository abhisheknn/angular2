import {Component,OnInit} from '@angular/core';
import {ArticlesOps} from '../models/articles/ArticlesOps'
import {Article} from '../models/article/Article'
@Component({
    selector:'add-link',
    templateUrl:'./add-link.component.html',
    styleUrls:['./add-link.component.css']
})

export class AddLink implements OnInit{
     articlesOps:ArticlesOps;

    constructor(articlesOps:ArticlesOps){
        this.articlesOps=articlesOps;
    }

    addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean
    {
          let  article:Article = new Article(title.value,link.value,0);
          this.articlesOps.addArticle(article);
        return true;
    }

    ngOnInit(){

    }
}


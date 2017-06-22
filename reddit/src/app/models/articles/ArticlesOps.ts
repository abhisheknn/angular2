

import {Article} from '../article/Article';
import {ArticleOps} from '../article/ArticleOps';
//import { Inject } from '@angular/core';
import {ArticlesFactory} from '../articles/ArticlesFactory';
import {Injectable} from '@angular/core';

@Injectable()
export class ArticlesOps{

constructor(private articlesFactory:ArticlesFactory ){

}


addArticle(article:Article):boolean{
return this._addArticle(article);
}
_addArticle(article:Article):boolean{
//@Inject(ArticlesFactory) articlesFactory:ArticlesFactory;

let articles:Article[]=this.articlesFactory.getArticles();
articles.push(article);

return true;
}

}

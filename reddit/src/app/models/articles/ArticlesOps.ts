

import {Article} from '../article/Article';
import {ArticleOps} from '../article/ArticleOps';
import {ArticleFactory} from '../article/ArticleFactory';
//import { Inject } from '@angular/core';
import {ArticlesFactory} from '../articles/ArticlesFactory';



export class ArticlesOps{


addArticle(article:Article):boolean{
return this._addArticle(article);
}
_addArticle(article:Article):boolean{
//@Inject(ArticlesFactory) articlesFactory:ArticlesFactory;

let articles:Article[]=ArticlesFactory.getArticles();
articles.push(article);

return true;
}

}

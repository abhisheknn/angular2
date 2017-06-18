import {Article} from '../article/Article'
import {Articles} from '../articles/Articles'

export class ArticlesFactory{

private static  _instance:ArticlesFactory = new ArticlesFactory();
private articles:Article[]=null;
 constructor(){
   // if(ArticlesFactory._instance){
   //     throw new Error("The Instance cannot be created");
   // }
    ArticlesFactory._instance=this;
}


private createArticles():Article[]{
    if(ArticlesFactory._instance.articles==null)
    ArticlesFactory._instance.articles=new Array<Article>();
return ArticlesFactory._instance.articles;

}

static getArticles():Article[]{
return  ArticlesFactory._instance.createArticles();
}
}
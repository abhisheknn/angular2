
import { Article } from '../article/Article'; 

export class Articles{
    private _articles:Article[];

           get articles():Article[]{
            return this._articles;
        }

        set articles(articles:Article[]){
        this._articles=articles;
        }

}
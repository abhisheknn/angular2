export class Article{
        private _title:string;
        private _link:string;

        get title():string{
            return this._title;
        }
     get link():string{
              return this._link;
    }
    
            set title(title:string){
                   this._title=title;
        }
     set link(link){
            this._link=link;
        }

        constructor(title:string,link:string){
        this._title=title;
        this._link=link;
        }

}
export class Article{
        private _title:string;
        private _link:string;
        private _upvotes:number=0;
        private _downvotes:number=0;

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

        get upvotes(){
            return this._upvotes;
        }

        set upvotes(votes){
            
            this._upvotes=this._upvotes+votes;
        }
       get downvotes(){
            return this._downvotes;
        }

        set downvotes(votes){
            
            this._downvotes=this._downvotes+votes;
        }
      
        constructor(title:string,link:string,vote:number){
        this.title=title;
        this.link=link;
        this.upvotes=vote;
        this.downvotes=vote;
        }

}
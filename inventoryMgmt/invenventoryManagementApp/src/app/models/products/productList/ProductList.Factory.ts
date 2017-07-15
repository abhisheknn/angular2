import {ProductList} from './ProductList'
import {Injectable} from '@angular/core'

@Injectable()
export class ProductListFactory{

products:ProductList;    

addToProductList(productList:ProductList):boolean{

return false;
}



getProducts():ProductList[]{

return null;
}


getProductsByCategory(CategoryId:String):ProductList[]{



    return null;
}

getProductsByPrice():ProductList[]{

    return null;
}

constructor(){

}

}
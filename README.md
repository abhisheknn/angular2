# angular2



Renderer2 issue.
If you are unable to install newer version of package may be because of package-lock.json.




ng new appname
ng generate component componentname
		
			componentname.component.ts
			componentname.component.html
			componentname.component.css
			componentname.component.spec.ts


Component :
	
		@Component({
		selector:                     // use this as tag on html page
		templateUrl :                 // html page
		stylesUrls  :[]                      // css files    Style encapsulation



				});


	{{ variable in component class }}

<div i*ngFor="let variable in variables">{{variable}}</div>


How to pass data from Parent component to child component?
//component class :
	
import {Input} from'@angular/core'	

export class{
	@Input variable :datatype
}


// parent html

<child-element [variable in child class]='variable in parent class'> </child-element>




Bootstraping uses webpack:

ng server > angular-cli.json =>main : main.ts =>  platformBrowserDynamic().bootstrapModule(AppModule);  
AppModule=> app.module.ts=> bootstrap: [AppComponent] => app.component.ts(main component)



//Module File

@NgModule {
	
declerations:[components defined in this module],      //You have to declare components in a NgModule before you can use them in your templates.
imports:[modules]


}
export class ModuleName{
	
}


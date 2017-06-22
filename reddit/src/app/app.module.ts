import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PanelModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import {AddLink} from './add-link/AddLink.component';
import {ButtonModule} from 'primeng/primeng';
import {LinkList} from './link-list/LinkList';
import {ArticlesOps}  from './models/articles/ArticlesOps';
import {ArticlesFactory}  from './models/articles/ArticlesFactory';

@NgModule({
  declarations: [
    AppComponent,
    AddLink,
    LinkList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    InputTextModule,
   BrowserAnimationsModule,
   ButtonModule
  ],
  providers: [{provide:ArticlesOps,useClass:ArticlesOps},{provide:ArticlesFactory,useClass:ArticlesFactory}],
  bootstrap: [AppComponent]
})
export class AppModule { }

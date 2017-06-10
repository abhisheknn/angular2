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

@NgModule({
  declarations: [
    AppComponent,
    AddLink
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import './rxjs-extensions';
import '../assets/css/styles.css';
import {ShareModule} from "./share/share.module";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ShareModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    providers:[],
    bootstrap: [ AppComponent ]
})
export class AppModule {


}

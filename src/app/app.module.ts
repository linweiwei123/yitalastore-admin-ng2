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
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MessageComponent} from "./share/common/message/message.component";
import {AngularFireModule} from "angularfire2";
import {ProductsComponent} from "./products/products.component";
import {SidebarComponent} from "./share/layout/sidebar/sidebar.component";
import {UploadComponent} from "./upload/upload.component";
import {FormComponent} from "./form/form.component";

//firebase的配置
export const firebaseConfig = {
    apiKey: "AIzaSyBAVsn61YI9t8qHE0URJmo7uoYUf9bT1eY",
    authDomain: "yitala-store.firebaseapp.com",
    databaseURL: "https://yitala-store.firebaseio.com",
    storageBucket: "yitala-store.appspot.com",
    messagingSenderId: "94202549379"
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ShareModule,
        NgbModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        SidebarComponent,
        ProductsComponent,
        UploadComponent,
        FormComponent
    ],
    providers:[],
    entryComponents: [MessageComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule {


}

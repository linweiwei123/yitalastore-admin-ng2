/**
 * Created by Linweiwei on 2016/12/22.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./layout/header/header.component";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        HeaderComponent,
        SidebarComponent
    ],
    providers:[],
    exports:[
        HeaderComponent,
        SidebarComponent
    ]
})

export class ShareModule{

}

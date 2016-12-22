/**
 * Created by Linweiwei on 2016/12/22.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./layout/header/header.component";
@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        HeaderComponent
    ],
    providers:[],
    exports:[
        HeaderComponent
    ]
})

export class ShareModule{

}

/**
 * Created by Linweiwei on 2016/12/22.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./layout/header/header.component";
import {MessageComponent} from "./common/message/message.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        HeaderComponent,
        MessageComponent
    ],
    providers:[],
    exports:[
        HeaderComponent,
        MessageComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class ShareModule{

}

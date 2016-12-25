/**
 * Created by Administrator on 2016/11/25.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    selector:'my-app',
    templateUrl:'app.component.html',
    styleUrls:[]
})

export class AppComponent implements OnInit{
    title = '英雄帖';

    constructor(
    ){}

    ngOnInit(): void {
    }


}
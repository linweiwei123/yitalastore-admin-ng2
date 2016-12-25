/**
 * Created by Linweiwei on 2016/12/22.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
@Component({
    selector:"layout-header",
    templateUrl:"header.component.html"
})

export class HeaderComponent implements OnInit{

    currentRoute:any;

    constructor(
        private route: ActivatedRoute,
        private router:Router
    ){
    }

    ngOnInit(): void {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                let currentRoute = this.route.root;
                while (currentRoute.children[0] !== undefined) {
                    currentRoute = currentRoute.children[0];
                }
                let obj = currentRoute.snapshot.data;
                //console.log(obj);
                this.currentRoute = obj["name"];
            })
    }

}
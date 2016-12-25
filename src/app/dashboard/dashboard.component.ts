/**
 * Created by Linweiwei on 2016/12/22.
 */
import {Component, OnInit} from "@angular/core";
import {MessageComponent} from "../share/common/message/message.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
    selector:"my-dashboard",
    templateUrl:"dashboard.component.html"
})

export class DashboardComponent implements OnInit{

    constructor(
        private modalService:NgbModal
    ){}

    ngOnInit(): void {

    }

    openModel(msg:string):void{
       const modalRef = this.modalService.open(MessageComponent,{backdrop:"static",keyboard:false,size:"sm"});
       modalRef.componentInstance.msg = msg;
    }
}
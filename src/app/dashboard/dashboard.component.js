"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Linweiwei on 2016/12/22.
 */
var core_1 = require("@angular/core");
var message_component_1 = require("../share/common/message/message.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var DashboardComponent = (function () {
    function DashboardComponent(modalService) {
        this.modalService = modalService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.openModel = function (msg) {
        var modalRef = this.modalService.open(message_component_1.MessageComponent, { backdrop: "static", keyboard: false, size: "sm" });
        modalRef.componentInstance.msg = msg;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "my-dashboard",
            templateUrl: "dashboard.component.html"
        }), 
        __metadata('design:paramtypes', [ng_bootstrap_1.NgbModal])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map
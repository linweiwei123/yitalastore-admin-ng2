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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require("./app.component");
require('./rxjs-extensions');
require('../assets/css/styles.css');
var share_module_1 = require("./share/share.module");
var app_routing_module_1 = require("./app-routing.module");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var message_component_1 = require("./share/common/message/message.component");
var angularfire2_1 = require("angularfire2");
var products_component_1 = require("./products/products.component");
var sidebar_component_1 = require("./share/layout/sidebar/sidebar.component");
var upload_component_1 = require("./upload/upload.component");
var form_component_1 = require("./form/form.component");
//firebase的配置
exports.firebaseConfig = {
    apiKey: "AIzaSyBAVsn61YI9t8qHE0URJmo7uoYUf9bT1eY",
    authDomain: "yitala-store.firebaseapp.com",
    databaseURL: "https://yitala-store.firebaseio.com",
    storageBucket: "yitala-store.appspot.com",
    messagingSenderId: "94202549379"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                share_module_1.ShareModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig)
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                sidebar_component_1.SidebarComponent,
                products_component_1.ProductsComponent,
                upload_component_1.UploadComponent,
                form_component_1.FormComponent
            ],
            providers: [],
            entryComponents: [message_component_1.MessageComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
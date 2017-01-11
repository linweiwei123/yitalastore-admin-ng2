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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by yitala on 2016/12/25.
 */
var core_1 = require("@angular/core");
var angularfire2_1 = require("angularfire2");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var message_component_1 = require("../share/common/message/message.component");
var router_1 = require("@angular/router");
var UploadComponent = (function () {
    //fileupload:any;
    function UploadComponent(firebaseApp, modalService, af, route) {
        this.modalService = modalService;
        this.af = af;
        this.route = route;
        this.firebaseStorage = firebaseApp.storage();
        //获取列表
        this.productUrls = af.database.list("product_image_urls");
    }
    UploadComponent.prototype.ngOnInit = function () {
        //this.getProductImage();
    };
    //获取单文件的方法
    UploadComponent.prototype.getProductImage = function () {
        var _this = this;
        var storageRef = this.firebaseStorage.ref().child('products');
        storageRef.getDownloadURL().then(function (url) {
            _this.productUrl = url;
        });
    };
    UploadComponent.prototype.onChange = function (event) {
        var file = event.srcElement.files[0];
        this.file = file;
    };
    UploadComponent.prototype.upload = function (inputfile) {
        var _this = this;
        var metadata = {
            'contentType': this.file.type
        };
        this.firebaseStorage.ref().child("products/" + this.file.name)
            .put(this.file, metadata)
            .then(function (snapshot) {
            console.log("uploaded " + snapshot.totalBytes + " bytes.");
            console.log(snapshot.metadata);
            _this.productUrl = snapshot.metadata.downloadURLs[0];
            _this.saveProductsUrlArray(_this.productUrl);
            var modalRef = _this.modalService.open(message_component_1.MessageComponent, { size: "sm" });
            modalRef.componentInstance.msg = "\u4E0A\u4F20\u6210\u529F\uFF01";
            inputfile.value = null;
            //this.fileupload.value = null;
        })
            .catch(function (error) {
            var modalRef = _this.modalService.open(message_component_1.MessageComponent, { size: "sm" });
            modalRef.componentInstance.msg = "\u4E0A\u4F20\u5931\u8D25\uFF0C" + error;
        });
    };
    UploadComponent.prototype.saveProductsUrlArray = function (url) {
        var productImageUrlsOb = this.af.database.list("product_image_urls");
        productImageUrlsOb.push({ url: url });
    };
    UploadComponent.prototype.deleteImg = function (url) {
        var _this = this;
        var productObservable = this.af.database.list("product_image_urls");
        productObservable.remove(url)
            .then(function () {
            var modalRef = _this.modalService.open(message_component_1.MessageComponent, { size: "sm" });
            modalRef.componentInstance.msg = "删除成功";
        })
            .catch(function () {
            var modalRef = _this.modalService.open(message_component_1.MessageComponent, { size: "sm" });
            modalRef.componentInstance.msg = "删除失败";
        });
    };
    UploadComponent = __decorate([
        core_1.Component({
            selector: "upload-img",
            templateUrl: 'upload.component.html'
        }),
        __param(0, core_1.Inject(angularfire2_1.FirebaseApp)), 
        __metadata('design:paramtypes', [Object, ng_bootstrap_1.NgbModal, angularfire2_1.AngularFire, router_1.ActivatedRoute])
    ], UploadComponent);
    return UploadComponent;
}());
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=upload.component.js.map
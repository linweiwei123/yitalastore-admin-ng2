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
 * Created by yitala on 2016/12/24.
 */
var core_1 = require("@angular/core");
var angularfire2_1 = require("angularfire2");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var message_component_1 = require("../share/common/message/message.component");
var ProductsComponent = (function () {
    function ProductsComponent(af, modalService) {
        this.af = af;
        this.modalService = modalService;
        //获取列表
        this.products = af.database.list("products");
        console.log(this.products);
        //获取对象
        this.storeowner = af.database.object("name");
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getDataOriginal();
    };
    //新增产品
    ProductsComponent.prototype.add = function () {
        var productObservable = this.af.database.list("products");
        //let id = this.items.toArray.length+1;
        var product = this.newproduct ? this.newproduct : "没有值";
        productObservable.push({ product: product });
    };
    //修改店名
    ProductsComponent.prototype.update = function (newStoreOwner) {
        var productObservable = this.af.database.object("name");
        productObservable.update({ name: newStoreOwner });
    };
    //删除单个，与全删的区别只是传不传参数，参数是$key
    ProductsComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        var productObservable = this.af.database.list("products");
        productObservable.remove(product.$key)
            .then(function () {
            var modalRef = _this.modalService.open(message_component_1.MessageComponent, { size: "sm" });
            modalRef.componentInstance.msg = "删除成功";
        })
            .catch(function () {
            var modalRef = _this.modalService.open(message_component_1.MessageComponent, { size: "sm" });
            modalRef.componentInstance.msg = "删除失败";
        });
    };
    //删除所有
    ProductsComponent.prototype.delete = function () {
        var _this = this;
        var productObservable = this.af.database.list("products");
        productObservable.remove()
            .then(function () {
            var modalRef = _this.modalService.open(message_component_1.MessageComponent, { size: "sm" });
            modalRef.componentInstance.msg = "删除成功";
        })
            .catch(function () {
            var modalRef = _this.modalService.open(message_component_1.MessageComponent, { size: "sm" });
            modalRef.componentInstance.msg = "删除失败";
        });
    };
    //获取原始数据
    ProductsComponent.prototype.getDataOriginal = function () {
        var _this = this;
        var result = this.af.database.object('/products', { preserveSnapshot: true });
        result.subscribe(function (snapshot) {
            console.log(snapshot.val());
            _this.productsJson = snapshot.val();
        });
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: "product-table",
            templateUrl: "products.component.html"
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, ng_bootstrap_1.NgbModal])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map
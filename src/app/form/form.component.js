/**
 * Created by yitala on 2017/1/8.
 */
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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormComponent = (function () {
    function FormComponent(fb) {
        this.customerForm = fb.group({
            'firstname': ['陈'],
            'lastname': ['志标'],
            'address': ['福州市'],
            'city': ['福州市'],
            'zip': ['350100']
        });
    }
    FormComponent.prototype.logForm = function (form) {
        console.log(form);
    };
    FormComponent.prototype.onSubmit = function (form) {
        console.log(form);
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'form-basic',
            templateUrl: 'form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map
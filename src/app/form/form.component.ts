/**
 * Created by yitala on 2017/1/8.
 */

import {Component} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
@Component({
    selector:'form-basic',
    templateUrl:'form.component.html'
})

export class FormComponent{

    customerForm:FormGroup;

    constructor(fb:FormBuilder){
        this.customerForm = fb.group({
            'firstname':['陈'],
            'lastname':['志标'],
            'address':['福州市'],
            'city':['福州市'],
            'zip':['350100']
        })
    }

    logForm(form:any):void{
        console.log(form);
    }

    onSubmit(form:any):void{
        console.log(form);
    }

}
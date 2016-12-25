/**
 * Created by yitala on 2016/12/24.
 */
import {Component, OnInit, Inject} from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseApp} from "angularfire2";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MessageComponent} from "../share/common/message/message.component";

@Component({
    selector:"product-table",
    templateUrl:"products.component.html"
})

export class ProductsComponent implements OnInit{


    products:FirebaseListObservable<any[]>;
    storeowner:FirebaseObjectObservable<string>;
    newproduct:string;
    productsJson:string;


    constructor(
        private af:AngularFire,
        private modalService:NgbModal
    ){
        //获取列表
        this.products = af.database.list("products");
        console.log(this.products);

        //获取对象
        this.storeowner = af.database.object("name");

    }

    ngOnInit(): void {
        this.getDataOriginal();

    }

    //新增产品
    add():void{
        const productObservable = this.af.database.list("products");
        //let id = this.items.toArray.length+1;
        let product = this.newproduct?this.newproduct:"没有值";
        productObservable.push({product:product});
    }

    //修改店名
    update(newStoreOwner:string):void{
        const productObservable = this.af.database.object("name");
        productObservable.update({name:newStoreOwner});
    }

    //删除单个，与全删的区别只是传不传参数，参数是$key
    deleteProduct(product:any):void{
        const productObservable = this.af.database.list("products");
        productObservable.remove(product.$key)
            .then(()=>{
                let modalRef =  this.modalService.open(MessageComponent,{size:"sm"});
                modalRef.componentInstance.msg = "删除成功";
            })
            .catch(()=>{
                let modalRef =  this.modalService.open(MessageComponent,{size:"sm"});
                modalRef.componentInstance.msg = "删除失败";
            });
    }

    //删除所有
    delete():void{
        const productObservable = this.af.database.list("products");
        productObservable.remove()
            .then(()=>{
                let modalRef =  this.modalService.open(MessageComponent,{size:"sm"});
                modalRef.componentInstance.msg = "删除成功";
            })
            .catch(()=>{
                let modalRef =  this.modalService.open(MessageComponent,{size:"sm"});
                modalRef.componentInstance.msg = "删除失败";
            });
    }

    //获取原始数据
    getDataOriginal():void{
        let result =  this.af.database.object('/products',{ preserveSnapshot:true});
        result.subscribe(snapshot=>{
            console.log(snapshot.val());
            this.productsJson = snapshot.val();
        })
    }


}
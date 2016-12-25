/**
 * Created by yitala on 2016/12/25.
 */
import {Component, OnInit, Inject} from "@angular/core";
import {FirebaseApp, AngularFire, FirebaseListObservable} from "angularfire2";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MessageComponent} from "../share/common/message/message.component";
import {ActivatedRoute} from "@angular/router";
@Component({
    selector:"upload-img",
    templateUrl:'upload.component.html'
})

export class UploadComponent implements OnInit{
    productUrls:FirebaseListObservable<any[]>;
    productUrl:string;
    firebaseStorage:any;
    file:any;
    //fileupload:any;

    constructor(
        @Inject(FirebaseApp) firebaseApp:any,
        private modalService:NgbModal,
        private af:AngularFire,
        private route:ActivatedRoute
    ){
        this.firebaseStorage = firebaseApp.storage();
        //获取列表
        this.productUrls = af.database.list("product_image_urls");
    }

    ngOnInit(): void {
        //this.getProductImage();
    }

    //获取单文件的方法
    getProductImage(){
        const storageRef = this.firebaseStorage.ref().child('products');
        storageRef.getDownloadURL().then(
            url=>{
                this.productUrl = url
            }

        );
    }

    onChange(event:any):void{
        let file = event.srcElement.files[0];
        this.file = file;
    }

    upload(inputfile:any):void{
        let metadata = {
            'contentType':this.file.type
        };
        this.firebaseStorage.ref().child(`products/${this.file.name}`)
            .put(this.file,metadata)
            .then((snapshot:any)=>{
                console.log(`uploaded ${snapshot.totalBytes} bytes.`);
                console.log(snapshot.metadata);
                this.productUrl = snapshot.metadata.downloadURLs[0];
                this.saveProductsUrlArray(this.productUrl);
                let modalRef =  this.modalService.open(MessageComponent,{size:"sm"});
                modalRef.componentInstance.msg = `上传成功！`;
                inputfile.value = null;
                //this.fileupload.value = null;
            })
            .catch((error:any)=>{
                let modalRef =  this.modalService.open(MessageComponent,{size:"sm"});
                modalRef.componentInstance.msg = `上传失败，${error}`;
            })
    }

    saveProductsUrlArray(url:string):void{
        let productImageUrlsOb = this.af.database.list("product_image_urls");
        productImageUrlsOb.push({url:url});
    }

    deleteImg(url:string):void{
        const productObservable = this.af.database.list("product_image_urls");
        productObservable.remove(url)
            .then(()=>{
                let modalRef =  this.modalService.open(MessageComponent,{size:"sm"});
                modalRef.componentInstance.msg = "删除成功";
            })
            .catch(()=>{
                let modalRef =  this.modalService.open(MessageComponent,{size:"sm"});
                modalRef.componentInstance.msg = "删除失败";
            });
    }
}
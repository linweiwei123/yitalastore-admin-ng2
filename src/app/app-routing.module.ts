import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductsComponent} from "./products/products.component";
import {UploadComponent} from "./upload/upload.component";



const appRoutes: Routes = [


    {   path: 'dashboard', component: DashboardComponent,data:{name:'dashboard'}},
    {
        path:'products',component:ProductsComponent,data:{name:'商品列表'}
    },
    {
        path:'upload',component:UploadComponent,data:{name:'上传图片'}
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
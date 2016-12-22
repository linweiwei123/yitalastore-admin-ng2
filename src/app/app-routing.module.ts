import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {NeedAuthGuard} from "./login/no-auth-guard.service";


const appRoutes: Routes = [


    {   path: 'dashboard', component: DashboardComponent},
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
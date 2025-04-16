import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        loadComponent:() => import('../login/login/login.component').then(n=>n.LoginComponent)
    }
];

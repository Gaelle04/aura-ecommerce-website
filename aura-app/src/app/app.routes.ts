import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductList } from './pages/product-list/product-list';
import { Login } from './pages/login/login';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [

    {
        path:'',
        component: Home

    }, 

    {
        path:'login', 
        component: Login,
    }, 

    {
        path:'products',
        component: ProductList
    }, 

    {
        path:'product/:id', 
        component:ProductDetails,
    }
];



import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductList } from './pages/product-list/product-list';
import { Login } from './pages/login/login';
import { ProductDetails } from './pages/product-details/product-details';
import { Signup } from './pages/signup/signup';

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
        path:'signup', 
        component: Signup,
    }, 

    {
        path:'products',
        component: ProductList
    }, 
    
    {
        path: 'products',
        loadComponent: () => import('./pages/product-list/product-list').then(m => m.ProductList)
      },
      

    {
        path:'product/:id', 
        component:ProductDetails,
    }
];



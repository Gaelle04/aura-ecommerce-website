import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductList } from './pages/product-list/product-list';
import { Login } from './pages/login/login';
import { ProductDetails } from './pages/product-details/product-details';
import { Signup } from './pages/signup/signup';
import { Profile } from './pages/profile/profile';
import { authGuardGuard } from './core/auth/guards/authguard/auth-guard';
import { NotFound } from './pages/not-found/not-found';
import { guestGuard } from './core/auth/guards/guestGuard/guest-guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [

    {
        path:'',
        component: Home
        

    }, 

    {
        path:'login', 
        component: Login,
        canActivate: [guestGuard]
    }, 
    {
        path:'cart', 
        component: Cart,
        //canActivate: [authGuardGuard]
    }, 

    {
        path:'profile', 
        component: Profile,
        canActivate: [authGuardGuard]
    }, 

    {
        path:'signup', 
        component: Signup,
        canActivate: [guestGuard]
    }, 

    {
        path:'products',
        component: ProductList
    }, 
    {
        path:'product/:id', 
        component:ProductDetails,
    }, 
    {
        path:'dashboard',
        component:Dashboard,
        

    },
    {
        path:'**', 
        component: NotFound,
    }

];



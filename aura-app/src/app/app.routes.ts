import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductDetails } from './pages/product-details/product-details';
import { authGuardGuard } from './core/auth/guards/authguard/auth-guard';
import { NotFound } from './pages/not-found/not-found';
import { guestGuard } from './core/auth/guards/guestGuard/guest-guard';


export const routes: Routes = [

    {
        path:'',
        component: Home
        

    }, 

    {
        path:'login', 
        loadChildren: () =>
        import('./pages/login/login.routes').then(m => m.routes),
        canActivate: [guestGuard]
    }, 
    {
        path:'cart', 
        loadChildren: () =>
        import('./pages/cart/cart.routes').then(m => m.routes),
        //canActivate: [authGuardGuard]
    }, 

    {
        path:'profile', 
        loadChildren: () =>
        import('./pages/profile/profile.routes').then(m => m.routes),
        canActivate: [authGuardGuard]
    }, 
    {
        path:'favorites', 
        loadChildren: () =>
        import('./pages/favorites/favorites.routes').then(m => m.routes),
        canActivate: [authGuardGuard]
    }, 
    {
        path:'signup', 
        loadChildren: () =>
        import('./pages/signup/signup.routes').then(m => m.routes),
        canActivate: [guestGuard]
    }, 

    {
        path:'products',
        loadChildren: () =>
        import('./pages/product-list/product-list.routes').then(m => m.routes),
    }, 
    {
        path:'product/:id', 
        component:ProductDetails,
    }, 
    {
        path:'dashboard',
        loadChildren: () =>
        import('./pages/dashboard/dashboard.routes').then(m => m.routes),
        canActivate: [authGuardGuard]
        

    },
    {
        path:'**', 
        component: NotFound,
    }

];



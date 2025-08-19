import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductDetails } from './pages/product-details/product-details';
import { authGuardGuard } from './core/auth/guards/authguard/auth-guard';
import { NotFound } from './pages/not-found/not-found';
import { guestGuard } from './core/auth/guards/guestGuard/guest-guard';
import { About } from './pages/about/about';
import { adminGuardGuard } from './core/auth/guards/adminGuard/admin-guard-guard';


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
        canActivate: [authGuardGuard]
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
        path:'product-details/:id', 
        component:ProductDetails,
    }, 
    {
        path:'dashboard',
        loadChildren: () =>
        import('./pages/dashboard/dashboard.routes').then(m => m.routes),
        canActivate: [adminGuardGuard]
        

    },
      {
        path:'categories/:slug',
        loadComponent: () =>
        import('./pages/categories/categories').then(m => m.Categories)
      },
      
    {
        path:'about',
        component: About
    },
    {
        path:'**', 
        component: NotFound,
    }

];



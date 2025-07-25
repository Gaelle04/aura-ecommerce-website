import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductDetails } from './pages/product-details/product-details';
import { authGuardGuard } from './core/auth/guards/authguard/auth-guard';
import { NotFound } from './pages/not-found/not-found';
import { guestGuard } from './core/auth/guards/guestGuard/guest-guard';
import { About } from './pages/about/about';


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
<<<<<<< HEAD
        loadChildren: () =>
        import('./pages/cart/cart.routes').then(m => m.routes),
=======
        component: Cart,
>>>>>>> 9fd5e340d8c965fd7145e0fabc6da19de5df579f
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
        path:'about',
        component: About
    },
    {
        path:'**', 
        component: NotFound,
    }

];



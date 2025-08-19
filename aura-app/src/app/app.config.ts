import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AuthInterceptor } from './core/auth/interceptors/auth-interceptor';
import { cartReducer } from './pages/cart/cart.reducer';
import {provideStore} from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

const isBrowser = typeof window !== 'undefined';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()), 
    provideHttpClient(withFetch(), withInterceptors([AuthInterceptor])),
    provideStore({cart: cartReducer}),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false, 
    })
  ]
};

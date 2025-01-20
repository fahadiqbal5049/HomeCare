import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterServiceComponent } from './pages/register-service/register-service.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './pages/services/auth-service/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
  { path: 'plumbing', loadComponent: () => import('./pages/plumbing/plumbing.component').then(m => m.PlumbingComponent) },
  { path: 'cleaning', loadComponent: () => import('./pages/cleaning/cleaning.component').then(m => m.CleaningComponent) },
  { path: 'electricians', loadComponent: () => import('./pages/electricians/electricians.component').then(m => m.ElectriciansComponent) },
  { path: 'gardening', loadComponent: () => import('./pages/gardening/gardening.component').then(m => m.GardeningComponent) },
  // { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'register-service', component: RegisterServiceComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },


  { path: '**', redirectTo: '' }
];

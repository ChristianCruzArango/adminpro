import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegistrarComponent } from './login/registrar/registrar.component';


const routes: Routes = [
  { path: 'login'    , component: LoginComponent },
  { path: 'register' , component: RegistrarComponent },
  { path: '**', component:NopagefoundComponent }
];

export const APPROUTING = RouterModule.forRoot(routes,{useHash:true});

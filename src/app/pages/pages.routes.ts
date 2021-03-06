import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



const pages_routes: Routes = [
    { path: ''         , component: PagesComponent,children:[
    { path: 'dashboard', component: DashboradComponent },
    { path: 'progress' , component: ProgressComponent },
    { path: 'graficas1', component: Graficas1Component },
    { path: '', pathMatch:'full', redirectTo: '/dashboard' },
  ]},
];

export const PAGES_ROUTES = RouterModule.forChild(pages_routes);

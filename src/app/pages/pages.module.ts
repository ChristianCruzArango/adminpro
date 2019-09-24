import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';



@NgModule({
  declarations: [
    Graficas1Component,
    ProgressComponent,
    DashboradComponent,
    PagesComponent
  ],
  exports:[
    Graficas1Component,
    ProgressComponent,
    DashboradComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }

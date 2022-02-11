import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [
    MainComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
  ]
})
export class MainModule { }

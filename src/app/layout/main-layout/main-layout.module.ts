import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { ContainerModule } from '../../shared/layout/container/container.module'
import { RouterModule } from '@angular/router'
import { SectionModule } from '../../shared/layout/section/section.module'



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  exports: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    RouterModule,
    SectionModule
  ],
})
export class MainLayoutModule { }

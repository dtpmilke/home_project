import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotAuthGuard } from './guards/not-auth.guard'
import { MainLayoutComponent } from './layout/main-layout/main-layout.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate: [NotAuthGuard]
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

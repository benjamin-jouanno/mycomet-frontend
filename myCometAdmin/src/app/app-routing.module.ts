import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { CometEditComponent } from './comet-edit/comet-edit.component';
import { CometsPageComponent } from './comets-page/comets-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserPageComponent } from './user-page/user-page.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user/:id', component: UserEditComponent},
  {path: 'users', component: UserPageComponent},
  {path: 'comet/:id', component: CometEditComponent},
  {path: 'comets', component: CometsPageComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

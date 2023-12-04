import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompaniesPageComponent } from './companies/companies-page/companies-page.component';
import { NewcompanyComponent } from './companies/newcompany/newcompany.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { MyUserComponent } from './users/my-user/my-user.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { CompanyPageComponent } from './companies/company-page/company-page.component';
import { UserPageComponent } from './users/user-page/user-page.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'empresas', component: CompaniesPageComponent },
  { path: 'empresas/nova', component: NewcompanyComponent },
  { path: 'empresas/:id', component: CompanyPageComponent, },
  { path: 'usuarios', component: UsersListComponent },
  { path: 'usuarios/novo', component: NewUserComponent },
  { path: 'usuarios/:id', component: UserPageComponent },
  { path: 'perfil', component: MyUserComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

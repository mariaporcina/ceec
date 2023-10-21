import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompaniesPageComponent } from './companies/companies-page/companies-page.component';
import { NewcompanyComponent } from './companies/newcompany/newcompany.component';
import { UsersComponent } from './users/users.component';
import { MyuserComponent } from './myuser/myuser.component';
import { NewuserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login/login.component';
import { CompanyPageComponent } from './companies/company-page/company-page.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'empresas', component: CompaniesPageComponent },
  { path: 'empresas/nova', component: NewcompanyComponent },
  { path: 'empresas/:id', component: CompanyPageComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: 'usuarios/novo', component: NewuserComponent },
  { path: 'perfil', component: MyuserComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

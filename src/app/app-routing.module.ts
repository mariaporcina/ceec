import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { UsersComponent } from './users/users.component';
import { MyuserComponent } from './myuser/myuser.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'empresas', component: CompaniesComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: 'meu_usuario', component: MyuserComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

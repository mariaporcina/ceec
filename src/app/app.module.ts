import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CompaniesPageComponent } from './companies/companies-page/companies-page.component';
import { NewcompanyComponent } from './companies/newcompany/newcompany.component';
import { LoginComponent } from './login/login.component';
import { CompanyPageComponent } from './companies/company-page/company-page.component';
import { CompanyFormComponent } from './companies/company-form/company-form.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { MyUserComponent } from './users/my-user/my-user.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CompaniesPageComponent,
    NewcompanyComponent,
    LoginComponent,
    CompanyPageComponent,
    CompanyFormComponent,
    UsersListComponent,
    UserFormComponent,
    NewUserComponent,
    UserPageComponent,
    MyUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

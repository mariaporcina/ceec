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
import { UsersComponent } from './users/users.component';
import { MyuserComponent } from './myuser/myuser.component';
import { NewcompanyComponent } from './companies/newcompany/newcompany.component';
import { NewuserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login/login.component';
import { CompanyPageComponent } from './companies/company-page/company-page.component';
import { CompanyItemComponent } from './companies/company-item/company-item.component';
import { CompanyFormComponent } from './companies/company-form/company-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CompaniesPageComponent,
    UsersComponent,
    MyuserComponent,
    NewcompanyComponent,
    NewuserComponent,
    LoginComponent,
    CompanyPageComponent,
    CompanyItemComponent,
    CompanyFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
